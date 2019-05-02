var words = ["ground", "control", "to", "major", "tom"];

function map(input1, input2) {
    outputarray = [];
    input2(input1)
}


function function1(word) {
    word.forEach(function(el){
        outputarray.push(el.length)
    })
    console.log(outputarray)
}

map(words, function1)


// map(words, function(word) {
//   return word.length;
// });

function function2(word) {
    word.forEach(function(el){
        outputarray.push(el.toUpperCase())
    })
    console.log(outputarray)

}

map(words, function2)

// map(words, function(word) {
//   return word.toUpperCase();
// });

function function3(word) {
    word.forEach(function(el){
        outputarray.push((el.split('').reverse().join('')))
    })
    console.log(outputarray)
}

map(words, function3)

// map(words, function(word) {
//   return word.split('').reverse().join('');
// });