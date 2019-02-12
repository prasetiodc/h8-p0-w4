function cariMedian(arr){
    var tengah = 0
    var median = 0

    if(arr.length % 2 == 0){
        tengah = arr.length/2
        median=(arr[tengah-1]+arr[tengah])/2
    } else{
        tengah = Math.round(arr.length/2)
        median = arr[tengah-1]
    }

    return median

}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5