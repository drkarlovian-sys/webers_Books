# Book Hunt

A book discovery website built with React and Vite, using a local `books.json` dataset (210 books).

## Run it

You need Node.js 18 or newer.

```bash
npm install
npm run dev
```

Then open the link shown in the terminal (usually http://localhost:5173).

To make a production build: `npm run build` (output goes to `dist/`).

## Features

- Search by title or author, with handling for empty searches and no results
- Book cards with cover, title, author, year and rating; broken covers show a title tile
- Details popup with rating, ratings count, genres, ISBN, language and a Goodreads link
- Genre filter, year range filter, and sorting by popularity, rating, year or title
- Pagination, favourites (saved in the browser), Book of the Day
- Compare two books side by side
- Dark/light mode

## Project structure

```
index.html
package.json
vite.config.js
src/
  main.jsx      entry point
  App.jsx       all components and logic
  App.css       styles
  books.json    dataset
```
