const $ = require('jquery');

$.ajax('https://randomuser.me/api/?results=10&inc=gender,name,nat,email,phone')
  .then(function(data) { 
    return filterUsersByGender(data) 
  })
  .then(function(filterResult) { 
    console.log(filterResult) 
  })

function filterUsersByGender(data) {
  let males = data.results.filter(function(user){
    return user.gender === 'male';
  }) // replace with filter for males
  let females = data.results.filter(function(user){
    return user.gender === 'female';
  }) // replace with filter for females
  return { males, females }
}