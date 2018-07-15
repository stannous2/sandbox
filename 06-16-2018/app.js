

var config = {
    apiKey: "AIzaSyCUa3OmzBQAV9MHxQg6Pgl2s5533V5qjEI",
    authDomain: "coder-bay-fee9d.firebaseapp.com",
    databaseURL: "https://coder-bay-fee9d.firebaseio.com",
    storageBucket: "coder-bay-fee9d.appspot.com"
  };
  firebase.initializeApp(config);
  // Assign the reference to the database to a variable named 'database'
  var database = firebase.database();

  database.ref().push({
    name
  })