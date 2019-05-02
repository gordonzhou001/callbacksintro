function findWaldo(arr, found) {
    // for (var i = 0; i < arr.length; i++) {
    //   if (arr[i] === "Waldo") {
        // var index = i;
        // found(index);   // execute callback
    //   }
    // }
//   }
    arr.forEach(function(el, i) {
        if (el === "Waldo") {
            var index = i;
            found(index)
        }
    })
}
  
  function actionWhenFound(gogogo) {
    console.log("Found him at index " + gogogo + "!");
  }
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);