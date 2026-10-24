/* ============================================================
   Entry page: one book or film, with its Notes and (for books)
   Quotations. The address looks like
     entry.html#book.collected-fictions
     entry.html#film.winter-sleep
   You normally don't need to edit this file.
   ============================================================ */
(function () {
  "use strict";
  var L = window.LIB, esc = L.esc;
  var box = document.getElementById("entry");

  function render() {
    var token = decodeURIComponent((location.hash || "").replace("#", ""));
    var dot = token.indexOf(".");
    var kind = token.slice(0, dot), id = token.slice(dot + 1);
    var list = kind === "film" ? L.FILMS : L.BOOKS;
    var item = list.filter(function (x) { return L.idOf(x) === id; })[0];
    var back = '<a class="back" href="leisure.html#' + (kind === "film" ? "films" : "books") + '">← Back to the library</a>';

    if (!item || (kind !== "book" && kind !== "film")) {
      box.innerHTML = back + '<p class="nothing">This entry isn\'t in the library. It may have been renamed.</p>';
      document.title = "Not found · Berfin Bastug";
      return;
    }
    document.title = item.title + " · Berfin Bastug";

    var who, foot = [];
    if (kind === "book") {
      who = [esc(item.author), esc(item.country)].filter(Boolean).join(" · ");
      if (item.status === "reading") foot.push("<span>Reading now</span>");
      else if (item.finished) foot.push("<span>Read " + esc(L.fmtDate(item.finished)) + "</span>");
      if (item.club) foot.push(L.clubBadge(item.club));
    } else {
      who = [esc(item.director), esc(item.country), esc(item.year)].filter(Boolean).join(" · ");
      if (item.watched) foot.push("<span>Watched " + esc(L.fmtDate(item.watched)) + "</span>");
    }

    box.innerHTML = back +
      '<header class="entry-head">' + L.coverHTML(item, null) +
      '<div><p class="label">' + (kind === "book" ? "Book" : "Film") + " · No. " + L.pad(item._no) + "</p>" +
      "<h1>" + esc(item.title) + "</h1>" +
      (item.original ? '<p class="orig">' + esc(item.original) + "</p>" : "") +
      (who ? '<p class="who">' + who + "</p>" : "") +
      (foot.length ? '<div class="entry-foot">' + foot.join("") + "</div>" : "") +
      "</div></header>" +
      '<div id="writing"><p class="nothing">Loading notes…</p></div>';

    L.loadNotes(kind, item).then(function (n) {
      var w = document.getElementById("writing");
      var html = "";
      if (n && n.notes.length) {
        html += '<section class="writing"><h2>Notes</h2><div class="notes">' +
          n.notes.map(function (p) { return "<p>" + L.inline(p) + "</p>"; }).join("") + "</div></section>";
      }
      if (kind === "book" && n && n.quotes.length) {
        html += '<section class="writing"><h2>Quotations</h2><ul class="quotes">' +
          n.quotes.map(function (q) {
            return "<li><blockquote>" + L.inline(q.text) + "</blockquote>" + (q.page ? '<span class="page">' + esc(q.page) + "</span>" : "") + "</li>";
          }).join("") + "</ul></section>";
      }
      if (item.clubNote) {
        html += '<section class="writing"><h2>From the book club</h2><div class="notes"><p>' + L.inline(item.clubNote) + "</p></div></section>";
      }
      w.innerHTML = html || '<p class="nothing">No notes yet.</p>';
      w.style.display = "grid";
      w.style.gap = "2.5rem";
    });
  }

  render();
  window.addEventListener("hashchange", function () { render(); window.scrollTo(0, 0); });
})();
