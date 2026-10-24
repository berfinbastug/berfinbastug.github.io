/* ============================================================
   YOUR BOOK CLUBS
   Each club's past picks are filled in automatically from your
   bookshelf: any book in books.js with  club: "lit"  or
   club: "science"  shows up under that club.
   Here you only describe the club and its current pick.
   ============================================================ */

window.CLUBS = [
  {
    id: "lit",                         // must match the `club` field in books.js
    kind: "Literature",
    name: "[Literature club name]",
    description: "[One or two sentences: who you are, what you read, how it started.]",
    meets: "[Monthly, first Thursday]",
    role: "[Member / Organizer]",
    current: { title: "The Museum of Innocence", author: "Orhan Pamuk" }
  },
  {
    id: "science",
    kind: "Science",
    name: "[Science club name]",
    description: "[One or two sentences: popular science, classic papers, or both?]",
    meets: "[Every other Wednesday]",
    role: "[Member / Organizer]",
    current: { title: "[Current pick]", author: "[Author]" }
  }
];
