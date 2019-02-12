function angkaPrima(angka){
    var status = true

    for(var i=1; i<angka; i++){
        if(i!=1){
            if(angka%i==0){
                status = false
            }
        }
    }

    return status
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false

