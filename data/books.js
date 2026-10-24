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
   isbn       "978XXXXXXXXXX"                  the book's ISBN: its cover is fetched
                                               automatically (see COVERS below)
   cover      "images/covers/name.jpg"         your own cover picture (used instead
                                               of the automatic one)

   COVERS
   1. Easiest: add the ISBN. It's the 13-digit number starting with
      978 or 979, on the back cover by the barcode or on the
      copyright page. The cover comes from Open Library, a free
      book catalogue.
   2. If no cover appears (common for some Turkish editions), or
      you prefer your own: put a picture in the images/covers
      folder and add  cover: "images/covers/<name>.jpg".
      A photo of your copy or the publisher's cover image works.
   3. With neither, the book gets a painted tile with its title.

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
      title: "There There",
      author: "Tommy Orange",
      country: "United States",
      finished: "2026-10-17",
      isbn: "0525436146"
  },
  {
    title: "Re-Engineering Philosophy for Limited Beings",
    author: "William C. Wimsatt",
    country: "United States",
    finished: "2026-09-27",
    club: "science",
    isbn: "0674015452"
  },
    {
    title: "How Proust Can Change Your Life",
    author: "Alain de Botton",
    country: "United Kingdom",
    finished: "2026-09",
    cover: "images/covers/proust.jpeg"
  },
  {
    title: "Dominion: The Making of the Western Mind",
    author: "Tom Holland",
    country: "United Kingdom",
    finished: "2026-09-27",
    isbn: "0349141207"
  },
  {
    title: "Ways of Seeing",
    author: "John Berger",
    country: "United Kingdom",
    finished: "2026-05-03",
    club: "lit",
    cover: "images/covers/john-berger.jpeg"
  },
  {
    title: "Debt: The First 5,000 Years",
    author: "David Graeber",
    country: "United States",
    finished: "2026-04",
    isbn: "9781612194196"
  },
  {
    title: "Dopamine Nation",
    author: "Anna Lembke",
    country: "United States",
    finished: "2026-04",
    cover: "images/covers/dopamine-nation.jpeg"
  },
  {
    title: "The Door",
    author: "Magda Szabo",
    country: "Hungary",
    finished: "2026-02-15",
    isbn: "978-1-784-87640-1"
  },
  {
    title: "A Heart So White",
    author: "Javier Marías",
    country: "Spain",
    finished: "2026-01-01",
    isbn: "0141199954"
  },
  {
    title: "Becoming Myself: A Psychiatrist's Memoir",
    author: "Irvin D. Yalom",
    country: "United States",
    finished: "2025-12-14",
    isbn: "0349410070"
  },
  {
    title: "Askin Halleri",
    author: "Alper Hasanoglu",
    country: "Turkey",
    finished: "2025-11-29",
    isbn: "6258393039"
  },
  {
    title: "The Course of Love",
    author: "Alain de Botton",
    country: "United Kingdom",
    finished: "2025-11-12",
    club: "lit"
  },
  {
    title: "Promise at Dawn",
    author: "Romain Gary",
    country: "France",
    finished: "2025-17-10"
  },
  {
    title: "The Master and Margarita",
    author: "Mikhail Bulgakov",
    finished: "2025-01-09",
    club: "lit"
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    country: "United Kingdom",
    finished: "2025-05-07"
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    country: "United Kingdom",
    finished: "2025-05-07"
  }
];
