/* ============================================================
   Shared helpers for the Leisure pages (catalogue and entry
   pages). You normally don't need to edit this file.
   ============================================================ */
(function () {
  "use strict";

  var BOOKS = window.BOOKS || [];
  var FILMS = window.FILMS || [];
  var CLUBS = window.CLUBS || [];
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Faded pigments for covers without a picture: [background, letter]
  var PIGMENTS = [
    ["#c99a1a", "#3d2c06"], ["#c4ccd0", "#2f3a44"], ["#b8936a", "#3d2a17"],
    ["#cbbf5a", "#3f3a10"], ["#b4722c", "#2e1a08"], ["#5d7389", "#f0f2f2"],
    ["#8c2f14", "#f3e3d6"]
  ];

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function hash(s) {
    var h = 0;
    for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    return h;
  }
  // "Kürk Mantolu Madonna" -> "kurk-mantolu-madonna"
  function slug(s) {
    var map = { "ı": "i", "İ": "i", "ş": "s", "Ş": "s", "ğ": "g", "Ğ": "g", "ç": "c", "Ç": "c", "ö": "o", "Ö": "o", "ü": "u", "Ü": "u", "æ": "ae", "œ": "oe", "ß": "ss" };
    return String(s || "")
      .replace(/[ıİşŞğĞçÇöÖüÜæœß]/g, function (c) { return map[c]; })
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .toLowerCase()
      .replace(/&/g, " and ")
      .replace(/['’]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }
  function idOf(item) { return item.id || slug(item.title); }
  function pigment(item) {
    if (item.color) return [item.color, "#4a3b31"];
    return PIGMENTS[hash((item.title || "") + (item.author || item.director || "")) % PIGMENTS.length];
  }
  function glyph(title) {
    return String(title || "?").replace(/^(The|A|An)\s+/i, "").charAt(0).toUpperCase();
  }
  // "2026-09-28" -> "28 Sep 2026", "2026-06" -> "Jun 2026", "2025" -> "2025"
  function fmtDate(d) {
    if (!d) return "";
    var p = String(d).split("-");
    var out = [];
    if (p[2]) out.push(parseInt(p[2], 10));
    if (p[1]) out.push(MONTHS[parseInt(p[1], 10) - 1] || "");
    out.push(p[0]);
    return out.join(" ");
  }
  function pad(n) { return ("00" + n).slice(-3); }
  function clubOf(id) {
    for (var i = 0; i < CLUBS.length; i++) if (CLUBS[i].id === id) return CLUBS[i];
    return null;
  }
  function clubBadge(id) {
    var c = clubOf(id);
    if (!c) return "";
    return '<span class="badge ' + (id === "science" ? "science" : "") + '">' + esc(c.kind + " club") + "</span>";
  }
  function entryURL(kind, item) { return "entry.html#" + kind + "." + idOf(item); }
  // Which picture to show: your own image first, then an automatic
  // cover from Open Library (books with an ISBN), otherwise none.
  function pictureOf(item) {
    if (item.cover) return item.cover;
    if (item.poster) return item.poster;
    if (item.isbn) {
      var isbn = String(item.isbn).replace(/[^0-9Xx]/g, "");
      if (isbn) return "https://covers.openlibrary.org/b/isbn/" + isbn + "-L.jpg?default=false";
    }
    return "";
  }
  // A cover: the painted tile is always underneath; the picture sits on
  // top and removes itself if it can't load, so the tile shows instead.
  function coverHTML(item, href, small) {
    var c = pigment(item);
    var pic = pictureOf(item);
    var tag = href ? "a" : "span";
    var tile = small ? "" :
      '<span class="tile-t">' + esc(item.title) + '</span><span class="tile-a">' + esc(item.author || item.director || "") + "</span>";
    return "<" + tag + ' class="cover' + (small ? " small" : "") + '"' + (href ? ' href="' + href + '" tabindex="-1"' : "") + ' aria-hidden="true">' +
      '<span class="tile" style="background:' + c[0] + ";color:" + c[1] + '">' + tile + "</span>" +
      (pic ? '<img class="cover-img" src="' + esc(pic) + '" alt="" loading="lazy">' : "") + "</" + tag + ">";
  }
  document.addEventListener("error", function (e) {
    var t = e.target;
    if (t && t.classList && t.classList.contains("cover-img")) t.remove();
  }, true);

  // Catalogue numbers: in the order things were added (bottom of the list = 001)
  BOOKS.forEach(function (b, i) { b._no = BOOKS.length - i; b._kind = "book"; });
  FILMS.forEach(function (f, i) { f._no = FILMS.length - i; f._kind = "film"; });

  // ---------- notes files ----------
  // Format of a notes file:
  //   ## Notes
  //   Paragraphs, separated by blank lines.
  //   ## Quotations
  //   > A passage you copied down.
  //   p. 42
  function inline(s) {
    return esc(s)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2">$1</a>');
  }
  function parseNotes(text) {
    var notes = [], quotes = [], section = "notes";
    var blocks = [], cur = [];
    String(text).replace(/\r/g, "").split("\n").forEach(function (line) {
      var h = line.match(/^#{1,3}\s*(.+?)\s*$/);
      if (h) {
        if (cur.length) { blocks.push({ s: section, lines: cur }); cur = []; }
        section = /quot|alıntı|alinti/i.test(h[1]) ? "quotes" : "notes";
        return;
      }
      if (!line.trim()) {
        if (cur.length) { blocks.push({ s: section, lines: cur }); cur = []; }
        return;
      }
      cur.push(line);
    });
    if (cur.length) blocks.push({ s: section, lines: cur });

    blocks.forEach(function (b) {
      if (b.s === "notes") {
        notes.push(b.lines.join(" ").trim());
      } else {
        var page = "", body = [];
        b.lines.forEach(function (l) {
          var m = l.match(/^\s*(?:p\.|pp\.|page|s\.)\s*(.+)$/i);
          if (m && !/^\s*>/.test(l)) page = l.trim();
          else body.push(l.replace(/^\s*>\s?/, ""));
        });
        if (body.join("").trim()) quotes.push({ text: body.join(" ").trim(), page: page });
      }
    });
    return { notes: notes, quotes: quotes };
  }
  var cache = {};
  function loadNotes(kind, item) {
    var key = kind + "/" + idOf(item);
    if (!cache[key]) {
      cache[key] = fetch("notes/" + (kind === "book" ? "books" : "films") + "/" + idOf(item) + ".md")
        .then(function (r) { return r.ok ? r.text() : ""; })
        .then(function (t) { return t ? parseNotes(t) : null; })
        .catch(function () { return null; });
    }
    return cache[key];
  }

  window.LIB = {
    BOOKS: BOOKS, FILMS: FILMS, CLUBS: CLUBS,
    esc: esc, slug: slug, idOf: idOf, pigment: pigment, fmtDate: fmtDate, pad: pad,
    clubOf: clubOf, clubBadge: clubBadge, entryURL: entryURL, coverHTML: coverHTML,
    inline: inline, loadNotes: loadNotes
  };
})();
