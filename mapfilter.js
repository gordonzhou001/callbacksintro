var students = [
    { id: 1, name: "bruce",    age: 40 },
    { id: 2, name: "zoidberg", age: 22 },
    { id: 3, name: "alex",     age: 22 },
    { id: 4, name: "alex",     age: 30 }
  ];

students.sort(function(a,b){
    return (b.name - a.name)
})
console.log(students)
//    var outputarray = [];
// for (i = 0; i < students.length; i++){
    
    // outputarray.push(students[i].name)
// }
    // outputarray.sort()

    // console.log(outputarray)

// students.forEach(function(el, i) {
    // var outputarray = [];
    // var index = i;
    // outputarray.push(el.name)
    // outputarray.sort()
    // console.log(outputarray)
    
// })
// for (var element of movie){
    // console.log(element)
    //this only works for array
// }

// for (var movieKey in movie) {

    // console.log(moviekey,movie[moviekey])
// }
//this works for object

var students = [
    { id: 1, name: "bruce",    age: 40 },
    { id: 2, name: "zoidberg", age: 22 },
    { id: 3, name: "alex",     age: 22 },
    { id: 4, name: "alex",     age: 30 }
  ];
  
  students.sort(function(a, b) {
    var nameA = a.name
    var nameB = b.name
    var ageA = a.age
    var ageB = b.age
  
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    if (nameA === nameB) {
      return ageB - ageA
    }
  
  });
  console.log(students)
  

  //filter used on array

  //movies.filter();// create a loop if the callback is true then this is in.
  //var actionmovies = movies.filter(function(movieObj){
    //return movieObj.genre === 'genre'
    //if true then place this entire movieObj into resulting array
 // }

  //var actionmovies = movies.map(function(movieObj){
    //return movieObj.genre === 'genre'
    //if true then place this entire movieObj into resulting array
 // }

// var say = ['hello', 'hi', 'hey']

// var result = say.map(function(word)) {
    // var wordArr = word.split('');
    // wordArr[0] = wordArr[0].toUpperCase()
    // console.log(wordArr)
    // return wordArr.join('') 
// }

//var result = say.map(function(word){
//     var obj = {
//         word: word,
//         length: word.length
//     }
//     return obj
// })