function makeLoadedDie() {
    var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
    var index = 1
    var id = -1;
    // The following is the closure function
    return function(){
      if (index){
        id ++
      }
      else if (id = list.length -1){
      return list[id]
      }
      return list[id];
    }
}
  
  var rollLoadedDie = makeLoadedDie();
  
  console.log(rollLoadedDie());  // 5
  console.log(rollLoadedDie());  // 4
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 1
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 4
  console.log(rollLoadedDie());  // 2
  console.log(rollLoadedDie());  // 3
  console.log(rollLoadedDie());  // 3
  console.log(rollLoadedDie());  // 5