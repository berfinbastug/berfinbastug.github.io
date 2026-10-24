# berfinbastug.github.io

My personal website: academic pages plus a Leisure corner for books, films and book clubs.
Live at https://berfinbastug.github.io

## What's where

| File | What it is |
|---|---|
| `index.html` | Front page: name, photo, About & CV, Research, Publications, Talks |
| `leisure.html` | The Leisure page: book catalogue and index, films, book clubs |
| `entry.html` | The page for a single book or film (filled in automatically) |
| `data/books.js` | My library. **Add books here** |
| `data/films.js` | My films. **Add films here** |
| `data/clubs.js` | My two book clubs and their current picks |
| `notes/books/*.md` | Notes and quotations, one file per book |
| `notes/films/*.md` | Notes, one file per film |
| `notes/HOW-TO.md` | How to write a notes file |
| `style.css` | Colors, fonts and layout for the whole site |
| `library.js`, `leisure.js`, `entry.js` | Make the Leisure pages work. No need to edit |
| `images/` | My photo and research illustrations (I add these) |

## Common tasks

**Add a book**: open `data/books.js`, copy one `{ … },` block, paste it at the top of the list, change the details. Commit. Only title and author are required; the date read is optional.

**Write about a book**: create `notes/books/<title-in-lowercase-with-dashes>.md`. See `notes/HOW-TO.md`.

**Currently reading**: use `status: "reading"`. When I finish, remove it and (optionally) add `finished: "2026-10-24"`.

**Book club pick**: add `club: "lit"` or `club: "science"` to the book. It appears under that club automatically.

**Add a film**: same idea in `data/films.js`, with notes in `notes/films/`.

**Add a paper, talk or CV entry**: in `index.html`, copy an existing `<li>…</li>` block in that section and edit it.

**Pictures**: upload `images/photo.jpg` for my portrait and `images/research-1.jpg`, `-2.jpg`, `-3.jpg` for the research illustrations.

After each commit, GitHub Pages updates the live site within a minute or two.
