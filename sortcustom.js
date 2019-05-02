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
  