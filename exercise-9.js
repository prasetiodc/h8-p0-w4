function checkAB(str) { // you can only write your code here! 
    var status = false
    var batas = 0
    for(var i=0; i<str.length; i++){
      	if(str[i]=='a' && str[i+4]=='b'){
     		status = true
	    }else if(str[i]=='b' && str[i+4]=='a'){
			status = true
	    }
    }
    return status
}
     
     
// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false