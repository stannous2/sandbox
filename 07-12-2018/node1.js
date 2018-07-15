const fs = require('fs');

const books = ['Lord of the Rings', 'Lord of the Flies', 'Catcher in the Rye'];

let count = 0

function appendBook(book) {
  fs.appendFile('favorite-books.txt', book + '\n', function(err) {
    if (err) throw err;
    count++
    if (count === books.length) return;
    appendBook(books[count])
  })
}

appendBook(books[count])