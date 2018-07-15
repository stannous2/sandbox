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

const fs = require('fs');
const transactionType = process.argv[2];
const amount = process.argv[3];

switch (transactionType) {
  case 'total': {
    total(function(asdfasdf) {
      console.log(asdfasdf)
    });
    break;
  }
  case 'withdraw': {
    withdraw(amount);
    break;
  }

  case 'deposit': {
    deposit(amount);
    break;
  }

}

function withdraw(amount) {
  total(function(totalAmount) {
    console.log(totalAmount, amount)
    if (totalAmount < amount) {
      return console.log('You don\'t have enough!');
    }
    writeFile(`-${amount}`, function() {
      console.log(`Success! Withdrew ${amount}`)
    });
  })
}

function deposit() {
  writeFile(`${amount}`, function() {
    console.log(`Success! Deposited ${amount}`)
  });
}

function total(passedFunction) {
  fs.readFile('bank.txt', 'utf-8', function(err, data) {
   
     if (err) {
      return 'there is no bank yet!';
    };

    let numbers = data.split(',').map(parseFloat)
    let totalSum = numbers.reduce(function(sum, currentTransaction) {
      return sum + currentTransaction
    })

    passedFunction(totalSum);
  })
}

function lotto() {
  
}

function writeFile(text, callback) {
  fs.readFile('bank.txt', 'utf-8', function(err, data) {
    if (err) return fs.appendFile('bank.txt', text, callback);
    if (data) {
      fs.appendFile('bank.txt', ',' + text, callback)
    } else {
      fs.appendFile('bank.txt', text, callback)
    }
  })
}