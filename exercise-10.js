function changeMe(arr) {
    // you can only write your code here!
    for(var i=0; i<arr.length; i++){
        var fullName = '. ' + arr[i][0]+ ' ' +arr[i][1]
        console.log(i+1 + fullName)

        var ages = 2019-arr[i][3]
        
        if(arr[i][3] == undefined){
            ages = 'Invalid Birth Year'
        }
        
        var obj = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: ages
        }
        console.log(obj)
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""