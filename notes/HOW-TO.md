# Writing notes and quotations

Each book or film can have one notes file. The site reads it and shows it on that book's or film's own page.

## Where the file goes

- Books: `notes/books/<file name>.md`
- Films: `notes/films/<file name>.md`

The file name is the title in lowercase, with dashes instead of spaces, and without accents or punctuation:

| Title | File |
|---|---|
| Collected Fictions | `notes/books/collected-fictions.md` |
| Kürk Mantolu Madonna | `notes/books/kurk-mantolu-madonna.md` |
| Swann's Way | `notes/books/swanns-way.md` |
| Winter Sleep | `notes/films/winter-sleep.md` |

## What goes inside

```
## Notes

Your first paragraph.

Your second paragraph. Use *italics* and [links](https://example.com) if you like.

## Quotations

> A passage you copied down.
p. 42

> Another passage. A long one can run
> over several lines.
p. 118
```

- Leave an empty line between paragraphs and between quotations.
- Every line of a quotation starts with `>`.
- The page number goes on the line right after the quotation and starts with `p.` (or `s.`). It's optional.
- You can have only Notes, only Quotations, or both. Films show Notes only.
- No notes file? The book still appears, with just its details.

## Adding a file on GitHub

In the `notes/books` folder, click **Add file → Create new file**, type the file name (e.g. `swanns-way.md`), write, and click **Commit changes**.
