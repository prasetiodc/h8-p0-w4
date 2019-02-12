function cariModus(arr){
    
    var display = []
    var result = []

    for(var i=0; i<arr.length; i++){
        
        var flag = true
        //menentukan ada atau tidak
        for (var j=0; j<display.length; j++){
            if(arr[i]==display[j]){
                flag = false
            }
        }

        //bila tidak ada
        if(flag==true){
            display.push(arr[i])
        }
    }

    var counts = []
    for (var k=0; k<display.length; k++){
        var counter = 0
        for (var l=0; l<arr.length; l++){
            if(display[k]==arr[l]){
                counter++
            }
        }
        counts.push(counter)
    }

    var maxCounter = counts[0]
    var maxValue = display[0]
    for (var m=0; m<counts.length; m++){
        if (maxCounter<counts[m]){
            maxCounter = counts[m]
            maxValue = display[m]
        }
    }
    
    // console.log(display)
    // console.log(counts)
    // console.log(maxCounter)
    // console.log(maxValue)

    if(maxCounter==1){
        return -1
    }else if(maxCounter==arr.length){
        return -1
    }else{
        return maxValue
    }
    

}

// // TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5,])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1

