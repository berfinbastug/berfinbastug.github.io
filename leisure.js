/* ============================================================
   Leisure page: book catalogue and index, films, book clubs.
   You normally don't need to edit this file.
   ============================================================ */
(function () {
  "use strict";
  var L = window.LIB, esc = L.esc;
  var BOOKS = L.BOOKS, FILMS = L.FILMS, CLUBS = L.CLUBS;

  // ---------- tabs ----------
  var TABS = ["books", "films", "clubs"];
  function showTab(name, updateHash) {
    if (TABS.indexOf(name) === -1) name = "books";
    TABS.forEach(function (t) {
      document.getElementById("tab-" + t).setAttribute("aria-selected", String(t === name));
      document.getElementById("panel-" + t).hidden = t !== name;
    });
    if (updateHash && history.replaceState) {
      try { history.replaceState(null, "", "#" + name); } catch (e) { /* ignore */ }
    }
  }
  TABS.forEach(function (t) {
    document.getElementById("tab-" + t).addEventListener("click", function () { showTab(t, true); });
  });

  document.getElementById("count-books").textContent = BOOKS.length;
  document.getElementById("count-films").textContent = FILMS.length;

  // ---------- helpers ----------
  function uniq(list, getter) {
    var seen = {}, out = [];
    list.forEach(function (x) { var v = getter(x); if (v && !seen[v]) { seen[v] = 1; out.push(v); } });
    return out.sort(function (a, b) { return a.localeCompare(b); });
  }
  function textMatch(item, q, fields) {
    if (!q) return true;
    q = q.toLowerCase();
    return fields.some(function (f) { return item[f] && String(item[f]).toLowerCase().indexOf(q) !== -1; });
  }
  function linkish(kind, field, value) {
    return '<button type="button" class="linkish" data-' + kind + '-filter="' + field + '" data-value="' + esc(value) + '">' + esc(value) + "</button>";
  }
  function bare(t) { return String(t || "").replace(/^(The|A|An)\s+/i, ""); }
  function lastName(n) { var p = String(n || "").trim().split(/\s+/); return p[p.length - 1] + " " + n; }

  function addControls(boxId, prefix, defs, searchLabel) {
    var box = document.getElementById(boxId);
    var html = '<div class="field"><label for="' + prefix + 'search">Search</label>' +
      '<input class="search" id="' + prefix + 'search" type="search" placeholder="' + esc(searchLabel) + '"></div>';
    html += defs.map(function (d) {
      return '<div class="field"><label for="' + prefix + d.id + '">' + esc(d.label) + '</label><select id="' + prefix + d.id + '">' +
        (d.any ? '<option value="">' + esc(d.any) + "</option>" : "") +
        d.options.map(function (o) {
          var v = typeof o === "string" ? o : o.value, l = typeof o === "string" ? o : o.label;
          return '<option value="' + esc(v) + '">' + esc(l) + "</option>";
        }).join("") + "</select></div>";
    }).join("");
    box.insertAdjacentHTML("beforeend", html);
  }
  function read(prefix, defs) {
    var s = { q: document.getElementById(prefix + "search").value.trim() };
    defs.forEach(function (d) { s[d.id] = document.getElementById(prefix + d.id).value; });
    return s;
  }

  // "Notes · 3 quotations" hint, filled in once the notes file has loaded
  function hint(kind, item) {
    return '<span class="written" data-hint="' + kind + "." + esc(L.idOf(item)) + '"></span>';
  }
  function fillHints(root) {
    Array.prototype.forEach.call(root.querySelectorAll("[data-hint]"), function (el) {
      var parts = el.getAttribute("data-hint").split(".");
      var kind = parts.shift(), id = parts.join(".");
      var list = kind === "book" ? BOOKS : FILMS;
      var item = list.filter(function (x) { return L.idOf(x) === id; })[0];
      if (!item) return;
      L.loadNotes(kind, item).then(function (n) {
        if (!n) return;
        var bits = [];
        if (n.notes.length) bits.push("Notes");
        if (kind === "book" && n.quotes.length) bits.push(n.quotes.length + (n.quotes.length === 1 ? " quotation" : " quotations"));
        el.textContent = bits.join(" · ");
      });
    });
  }

  // ============================================================
  // BOOKS
  // ============================================================
  var BOOK_DEFS = [
    { id: "author", label: "Author", any: "All authors", options: uniq(BOOKS, function (b) { return b.author; }) },
    { id: "country", label: "Country", any: "All countries", options: uniq(BOOKS, function (b) { return b.country; }) },
    { id: "club", label: "Book club", any: "Any", options: CLUBS.map(function (c) { return { value: c.id, label: c.kind + " club" }; }) },
    { id: "sort", label: "Order", options: [
      { value: "", label: "Recently added" }, { value: "title", label: "Title A–Z" }, { value: "author", label: "Author A–Z" }] }
  ];
  addControls("book-controls", "bf-", BOOK_DEFS, "Title, author…");
  var bookView = "catalogue";

  function bookRow(b) {
    var url = L.entryURL("book", b);
    var who = [b.author ? linkish("book", "author", b.author) : "", b.country ? linkish("book", "country", b.country) : ""].filter(Boolean).join(" · ");
    var foot = [];
    if (b.status === "reading") foot.push("<span>Reading now</span>");
    else if (b.finished) foot.push("<span>Read " + esc(L.fmtDate(b.finished)) + "</span>");
    if (b.club) foot.push(L.clubBadge(b.club));
    foot.push(hint("book", b));
    return '<li class="entry-row"><span class="inv">No. ' + L.pad(b._no) + "</span>" + L.coverHTML(b, url) +
      '<div class="entry-body"><a class="entry-title" href="' + url + '">' + esc(b.title) +
      (b.original ? '<span class="orig">' + esc(b.original) + "</span>" : "") + "</a>" +
      (who ? '<div class="entry-who">' + who + "</div>" : "") +
      '<div class="entry-foot">' + foot.join("") + "</div></div></li>";
  }

  function indexHTML() {
    var cols = [
      { id: "author", title: "Authors", get: function (b) { return b.author; } },
      { id: "country", title: "Countries", get: function (b) { return b.country; } }
    ];
    return '<div class="indexes">' + cols.map(function (col) {
      var counts = {};
      BOOKS.forEach(function (b) { var v = col.get(b); if (v) counts[v] = (counts[v] || 0) + 1; });
      var keys = Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a] || a.localeCompare(b); });
      return '<section class="index-col"><h3>' + col.title + "</h3><ul>" + keys.map(function (k) {
        return "<li>" + linkish("book", col.id, k) + '<span class="n">' + counts[k] + "</span></li>";
      }).join("") + "</ul></section>";
    }).join("") + "</div>";
  }

  function renderBooks() {
    var s = read("bf-", BOOK_DEFS);
    var active = s.q || s.author || s.country || s.club;
    document.getElementById("book-clear").hidden = !active;
    var box = document.getElementById("book-view");

    if (bookView === "index") {
      document.getElementById("book-count").textContent = "Browse by author or country";
      box.innerHTML = indexHTML();
      return;
    }
    var list = BOOKS.filter(function (b) {
      if (s.author && b.author !== s.author) return false;
      if (s.country && b.country !== s.country) return false;
      if (s.club && b.club !== s.club) return false;
      return textMatch(b, s.q, ["title", "original", "author", "country"]);
    });
    if (s.sort === "title") list.sort(function (a, b) { return bare(a.title).localeCompare(bare(b.title)); });
    if (s.sort === "author") list.sort(function (a, b) { return lastName(a.author).localeCompare(lastName(b.author)); });

    document.getElementById("book-count").textContent =
      (active ? list.length + " of " + BOOKS.length : list.length) + (list.length === 1 ? " book" : " books");
    box.innerHTML = list.length
      ? '<ol class="catalogue">' + list.map(bookRow).join("") + "</ol>"
      : '<p class="empty">No books match. Try clearing a filter.</p>';
    fillHints(box);
  }

  // currently reading
  var reading = BOOKS.filter(function (b) { return b.status === "reading"; });
  if (!reading.length) document.getElementById("now-reading").hidden = true;
  else document.getElementById("now-list").innerHTML = reading.map(function (b) {
    return '<a class="now-item" href="' + L.entryURL("book", b) + '"><span class="mini" style="background:' + L.pigment(b)[0] + '"></span>' +
      '<span><span class="t">' + esc(b.title) + '</span><span class="a">' + esc(b.author) + "</span></span></a>";
  }).join("");

  var viewBtns = document.querySelectorAll(".views button");
  function setView(v) {
    bookView = v;
    Array.prototype.forEach.call(viewBtns, function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-view") === v)); });
  }
  Array.prototype.forEach.call(viewBtns, function (btn) {
    btn.addEventListener("click", function () { setView(btn.getAttribute("data-view")); renderBooks(); });
  });
  document.getElementById("book-controls").addEventListener("input", renderBooks);
  document.getElementById("book-clear").addEventListener("click", function () {
    document.getElementById("bf-search").value = "";
    ["author", "country", "club"].forEach(function (id) { document.getElementById("bf-" + id).value = ""; });
    renderBooks();
  });

  // ============================================================
  // FILMS
  // ============================================================
  var FILM_DEFS = [
    { id: "director", label: "Director", any: "All directors", options: uniq(FILMS, function (f) { return f.director; }) },
    { id: "country", label: "Country", any: "All countries", options: uniq(FILMS, function (f) { return f.country; }) }
  ];
  addControls("film-controls", "ff-", FILM_DEFS, "Title, director…");

  function filmRow(f) {
    var url = L.entryURL("film", f);
    var who = [f.director ? linkish("film", "director", f.director) : "", f.country ? linkish("film", "country", f.country) : "", f.year ? esc(f.year) : ""]
      .filter(Boolean).join(" · ");
    return '<li class="entry-row"><span class="inv">No. ' + L.pad(f._no) + "</span>" + L.coverHTML(f, url) +
      '<div class="entry-body"><a class="entry-title" href="' + url + '">' + esc(f.title) +
      (f.original ? '<span class="orig">' + esc(f.original) + "</span>" : "") + "</a>" +
      (who ? '<div class="entry-who">' + who + "</div>" : "") +
      '<div class="entry-foot">' + (f.watched ? "<span>Watched " + esc(L.fmtDate(f.watched)) + "</span>" : "") + hint("film", f) + "</div></div></li>";
  }
  function renderFilms() {
    var s = read("ff-", FILM_DEFS);
    var active = s.q || s.director || s.country;
    document.getElementById("film-clear").hidden = !active;
    var list = FILMS.filter(function (f) {
      if (s.director && f.director !== s.director) return false;
      if (s.country && f.country !== s.country) return false;
      return textMatch(f, s.q, ["title", "original", "director", "country"]);
    });
    document.getElementById("film-count").textContent = (active ? list.length + " of " + FILMS.length : list.length) + (list.length === 1 ? " film" : " films");
    var box = document.getElementById("film-view");
    box.innerHTML = list.length ? '<ol class="catalogue">' + list.map(filmRow).join("") + "</ol>" : '<p class="empty">No films match. Try clearing a filter.</p>';
    fillHints(box);
  }
  document.getElementById("film-controls").addEventListener("input", renderFilms);
  document.getElementById("film-clear").addEventListener("click", function () {
    document.getElementById("ff-search").value = "";
    FILM_DEFS.forEach(function (d) { document.getElementById("ff-" + d.id).value = ""; });
    renderFilms();
  });

  // ============================================================
  // CLUBS
  // ============================================================
  document.getElementById("club-list").innerHTML = CLUBS.map(function (c) {
    var picks = BOOKS.filter(function (b) { return b.club === c.id && b.status !== "reading"; });
    var cur = c.current;
    return '<article class="club"><div class="bands" aria-hidden="true"></div><div class="inner">' +
      '<div><p class="label">' + esc(c.kind) + "</p><h2>" + esc(c.name) + "</h2></div>" +
      '<p class="desc">' + esc(c.description) + "</p>" +
      '<div class="meta">' + (c.meets ? "<span>" + esc(c.meets) + "</span>" : "") + (c.role ? "<span>" + esc(c.role) + "</span>" : "") + "</div>" +
      (cur ? '<div class="current"><p class="label">Reading now</p><p class="t">' + esc(cur.title) + "</p><p>" + esc(cur.author) + "</p></div>" : "") +
      '<div><p class="label">Past picks</p>' +
      (picks.length ? '<ul class="picks">' + picks.map(function (b) {
        return '<li><a class="entry-title" href="' + L.entryURL("book", b) + '">' + esc(b.title) + "</a>" +
          '<span class="m">' + esc(b.author) + (b.finished ? " · " + esc(L.fmtDate(b.finished)) : "") + "</span>" +
          (b.clubNote ? '<span class="cn">' + esc(b.clubNote) + "</span>" : "") + "</li>";
      }).join("") + "</ul>" : '<p class="empty">No past picks yet.</p>') +
      "</div></div></article>";
  }).join("");

  // ---------- filter links (author, country, director…) ----------
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-book-filter]");
    if (t) {
      var sel = document.getElementById("bf-" + t.getAttribute("data-book-filter"));
      if (sel) { sel.value = t.getAttribute("data-value"); setView("catalogue"); renderBooks(); }
      document.getElementById("book-controls").scrollIntoView({ block: "nearest" });
      return;
    }
    t = e.target.closest("[data-film-filter]");
    if (t) {
      var fsel = document.getElementById("ff-" + t.getAttribute("data-film-filter"));
      if (fsel) { fsel.value = t.getAttribute("data-value"); renderFilms(); }
    }
  });

  renderBooks();
  renderFilms();
  showTab((location.hash || "").replace("#", ""), false);
})();
