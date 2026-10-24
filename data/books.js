/* ============================================================
   YOUR LIBRARY
   One book = one { … } block. To add a book, copy a block,
   paste it at the TOP of the list, and change the text.
   Keep the commas between blocks.

   title      "Title as you read it"           (required)
   author     "Author name"                    (required)
   original   "Original title"                 if you read a translation
   country    "Author's country"
   finished   "2026-10-24"                     day you finished it, if you know it
                                               ("2026-10" or "2026" also work)
   status     "reading"                        for a book you're reading now
   club       "lit" or "science"               if you read it for a book club
   clubNote   "…"                              one line about the club discussion
   cover      "images/covers/name.jpg"         optional cover picture

   NOTES AND QUOTATIONS live in their own file, one per book:
     notes/books/<file name>.md
   The file name is the title in lowercase, with dashes instead
   of spaces and without accents or punctuation, for example:
     "Collected Fictions"   → notes/books/collected-fictions.md
     "Kürk Mantolu Madonna" → notes/books/kurk-mantolu-madonna.md
   (If two books share a title, add  id: "some-other-name"  to
   one of them and use that as its file name.)
   A book without a notes file simply shows its basic details.

   Catalogue numbers count up in the order you add books:
   the bottom of this list is No. 001.

   The entries below are EXAMPLES. Replace them with your own.
   ============================================================ */

window.BOOKS = [
  {
    title: "The Museum of Innocence",
    original: "Masumiyet Müzesi",
    author: "Orhan Pamuk",
    country: "Turkey",
    status: "reading",
    club: "lit"
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    country: "United States",
    status: "reading"
  },
  {
    title: "Collected Fictions",
    author: "Jorge Luis Borges",
    country: "Argentina",
    finished: "2026-09-28",
    club: "lit",
    clubNote: "Example: we spent the whole evening on one story about perfect memory."
  },
  {
    title: "The Man Who Mistook His Wife for a Hat",
    author: "Oliver Sacks",
    country: "United Kingdom",
    finished: "2026-08-15",
    club: "science",
    clubNote: "Example: a good bridge between case studies and theory."
  },
  {
    title: "Mrs Dalloway",
    author: "Virginia Woolf",
    country: "United Kingdom",
    finished: "2026-06"
  },
  {
    title: "Kürk Mantolu Madonna",
    author: "Sabahattin Ali",
    country: "Turkey",
    club: "lit"
  },
  {
    title: "The Buried Giant",
    author: "Kazuo Ishiguro",
    country: "United Kingdom",
    finished: "2026-03-20"
  },
  {
    title: "Searching for Memory",
    author: "Daniel L. Schacter",
    country: "United States",
    club: "science"
  },
  {
    title: "Swann's Way",
    original: "Du côté de chez Swann",
    author: "Marcel Proust",
    country: "France",
    finished: "2025"
  },
  {
    title: "Speak, Memory",
    author: "Vladimir Nabokov",
    country: "United States",
    finished: "2025-05-19"
  },
  {
    title: "The Seven Sins of Memory",
    author: "Daniel L. Schacter",
    country: "United States",
    finished: "2025-02-10",
    club: "science"
  }
];
