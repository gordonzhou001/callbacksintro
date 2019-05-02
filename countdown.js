countdownGenerator = function (x) {
var num = x
    if (num > 0){
        return function(){
            num-- 
            console.log("T-minus" + num + "...")
        }
    }

    if (num = 0){
        return function(){
        console.log("Blast Off")
        }
    }

    if (num < 0){
        return function(){
        console.log("Rockets already gone, bub!")
        }
    }

}

var countdown = countdownGenerator(3);


  countdown(); // T-minus 3...
  countdown(); // T-minus 2...
  countdown(); // T-minus 1...
  countdown(); // Blast Off!
  countdown(); // Rockets already gone, bub!
  countdown(); // Rockets already gone, bub!