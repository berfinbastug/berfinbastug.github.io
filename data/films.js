/* ============================================================
   YOUR FILMS
   Add a film when you have something to write about it.
   One film = one { … } block. Copy a block, paste it at the
   TOP of the list, and change the text. Keep the commas.

   title      "Title"                     (required)
   original   "Original title"            if different
   director   "Director name"
   country    "Country"
   year       2004                        year the film came out
   watched    "2026-10-24"                day you watched it, if you know it
   poster     "images/posters/name.jpg"   the film's poster: put the picture
                                          in the images/posters folder.
                                          Without it, the film gets a painted
                                          tile with its title.

   YOUR NOTES live in their own file, one per film:
     notes/films/<file name>.md
   The file name is the title in lowercase with dashes, e.g.
     "Winter Sleep" → notes/films/winter-sleep.md

   The entries below are EXAMPLES. Replace them with your own.
   ============================================================ */

window.FILMS = [
  {
    title: "Eternal Sunshine of the Spotless Mind",
    director: "Michel Gondry",
    country: "United States",
    year: 2004,
    watched: "2026-10-11"
  },
  {
    title: "Winter Sleep",
    original: "Kış Uykusu",
    director: "Nuri Bilge Ceylan",
    country: "Turkey",
    year: 2014,
    watched: "2026-09-02"
  },
  {
    title: "Memento",
    director: "Christopher Nolan",
    country: "United States",
    year: 2000
  },
  {
    title: "Hiroshima mon amour",
    director: "Alain Resnais",
    country: "France",
    year: 1959,
    watched: "2026-02-14"
  },
  {
    title: "Stalker",
    director: "Andrei Tarkovsky",
    country: "Soviet Union",
    year: 1979,
    watched: "2025-12-03"
  }
];
