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
      cover: "images/covers/there-there.jpg"
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
    cover: "images/covers/dominion.jpg"
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
    cover: "images/covers/a-heart-so-white.jpg"
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
  },
  {
    title: "The World of Yesterday: Memoirs of a European",
    author: "Stefan Zweig",
    country: "Austria",
    finished: "2025-18-06",
    club: "lit"
  },
  {
    title: "Man's Seach for Meaning",
    author: "Viktor Frankl",
    country: "Austria",
    finished: "2025-11-06"
  },
  {
    title: "A Gentleman In Moscow",
    author: "Amor Towles",
    country: "United States",
    finished: "2025-05-05"
  },
  {
    title: "Ud Calan Kadinlar",
    author: "Reha Tanor",
    country: "Turkey",
    finished: "2025-15-03"
  },
  {
    title: "Huzur",
    author: "Ahmet Hamdi Tanpinar",
    country: "Turkey",
    finished: "2025-26-01",
    club: "lit"
  },
  {
    title: "Naive Super",
    author: "Erlend Loe",
    country: "Norway",
    finished: "2024-01-11",
    club: "lit"
  },
  {
    title: "Blitzed: Drugs in Nazi Germany",
    author: "Norman Ohler",
    country: "Germany",
    finished: "2024-26-11"
  },
  {
    title: "Benim Adim Kirmizi",
    author: "Orhan Pamuk",
    country: "Turkey",
    finished: "2024-12-09"
  },
  {
    title: "Bridge on the Drina",
    author: "Ivo Andric",
    country: "Serbia",
    finished: "2024-15-08",
    club: "lit"
  },
  {
    title: "Ben Frankfurt'ta Soforken",
    author: "Aydin Engin",
    country: "Turkey",
    finished: "2024-26-06"
  },
  {
    title: "Disgrace",
    author: "J.M Coetzee",
    country: "South Africa",
    finished: "2024-20-06",
    club: "lit"
  },
  {
    title: "Masumiyet Muzesi",
    author: "Orhan Pamuk",
    country: "Turkey",
    finished: "2024-14-05",
    club: "lit"
  },
  {
    title: "A History of the World in 10 1/2 Chapters",
    author: "Julian Barnes",
    country: "United Kingdom",
    finished: "2024-28-04",
    club: "lit"
  },
  {
    title: "SPQR",
    author: "Mary Beard",
    country: "United Kingdom",
    finished: "2024-03-04"
  },
  {
    title: "Hamlet",
    author: "William Shakespeare",
    country: "United Kingdom",
    finished: "2024-31-03",
    club: "lit"
  },
  {
    title: "Onca Yoksulluk Varken",
    author: "Emil Ajar",
    country: "France",
    finished: "2024-10-02",
    club: "lit"
  },
  {
    title: "Simple Passions",
    author: "Annie Ernaux",
    country: "France",
    finished: "2024-30-01",
    club: "lit"
  },
  {
    title: "The Notebook, the Proof, the Third Lie",
    author: "Agota Kristof",
    country: "Hungary",
    finished: "2023-17-12",
    club: "lit"
  },
  {
    title: "Climates of Love",
    author: "André Maurois",
    country: "France",
    finished: "2023-20-11",
    club: "lit"
  },
  {
    title: "The Merchant of Venice",
    author: "William Shakespeare",
    country: "United Kingdom",
    finished: "2023-14-11"
  },
  {
    title: "Confessions",
    author: "Jean-Jacques Rousseau",
    country: "France",
    finished: "2023-05-11"
  },
  {
    title: "Death in Venice",
    author: "Thomas Mann",
    country: "Germany",
    finished: "2023-22-10",
    club: "lit"
  },
  {
    title: "Unbearable Lightness of Being",
    author: "Milan Kundera",
    country: "Czech Republic",
    finished: "2023-01-11"
  },
  {
    title: "Escape from Freedom",
    author: "Erich Fromm",
    country: "Germany",
    finished: "2023-01-16"
  },
  {
    title: "Freud and Beyond",
    author: "Stephen A. Mitchell",
    country: "United States",
    finished: "2023-01-02"
  },
  {
    title: "Death of a Salesman",
    author: "Arthur Miller",
    country: "United States",
    finished: "2023-01-01"
  },
  {
    title: "Nibelungenlied",
    author: "Arthur Miller",
    country: "Germany",
    finished: "2022-10-12"
  },
  {
    title: "Adim Agop Memleketim Tokat",
    author: "Agop Arslanyan",
    country: "Turkey",
    finished: "2022-28-08"
  },
  {
    title: "Gönül ki Yetişmekte",
    author: "Gustave Flaubert",
    country: "France",
    finished: "2022-15-08"
  },
  {
    title: "The Hunchback of Notre Dame",
    author: "Victor Hugo",
    country: "France",
    finished: "2022-04-07"
  },
  {
    title: "Don't Look Back in Anger",
    author: "John Osborne",
    country: "United Kingdom",
    finished: "2022-24-05"
  },
  {
    title: "Perfume",
    author: "Patrick Suskind",
    country: "Germany",
    finished: "2022-01-05"
  },
  {
    title: "The Cherry Orchard",
    author: "Anton Chekhov",
    country: "Russia",
    finished: "2022-01-03"
  },
  {
    title: "The Cocktail Party",
    author: "T.S. Eliot",
    country: "United Kingdom",
    finished: "2022-25-01"
  },
  {
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    country: "Nigeria",
    finished: "2021-26-12"
  },
  {
    title: "Antigone",
    author: "Sophocles",
    country: "Greece",
    finished: "2021-01-08"
  },
  {
    title: "Origins of Totalitarianism",
    author: "Hannah Arendt",
    country: "Germany",
    finished: "2021-01-07"
  },
  {
    title: "Mrs. Dalloway",
    author: "Virginia Woolf",
    country: "United Kingdom",
    finished: "2021-10-06"
  },
  {
    title: "Alice in Wonderland",
    author: "Lewis Carroll",
    country: "United Kingdom",
    finished: "2021-01-04"
  },
  {
    title: "General Theory of Oblivion",
    author: "José Eduardo Agualusa",
    country: "Angola",
    finished: "2021-01-03"
  },
  {
    title: "Narcissus and Goldmund",
    author: "Herman Hesse",
    country: "Germany",
    finished: "2021-01-02"
  },
  {
    title: "Don Quixote",
    author: "Cervantes",
    country: "Spain",
    finished: "2020-01-04"
  },
  {
    title: "On Photography",
    author: "Susan Sontag",
    country: "United States",
    finished: "2020-01-02"
  },
];
