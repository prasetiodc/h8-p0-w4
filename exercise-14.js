function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here

    // if(arrPenumpang.length == 0){
    //     return
    // }


    var awal = 0
    var akhir = 0
    var display = []

    for (var i =0; i<arrPenumpang.length; i++){
        // console.log(arrPenumpang[i][1])
        for (var j=0; j<rute.length; j++){
            if(arrPenumpang[i][1]==rute[j]){
                // console.log(arrPenumpang[i][1],j)
                awal = j
            }
            if(arrPenumpang[i][2]==rute[j]){
                // console.log(arrPenumpang[i][2],j)
                akhir = j
            }
        }
        var obj = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: (akhir-awal)*2000
        }

        display.push(obj)
    }
    
    return display
    // console.log( awal, akhir)
}
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]