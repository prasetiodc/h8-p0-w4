function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var display = []
    
    for (var i=0; i<=angka; i++){
        var temp = ''

        if(angka % i == 0){
            var bagi = angka/i
            temp = String(i)+String(bagi)
            display.push(temp)
        }
    }


    var min = display[0].length
    for ( var j=0; j<display.length; j++){
        if(min>display[j].length){
            min = display[j].length
        }
    }

    return min
  }

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2