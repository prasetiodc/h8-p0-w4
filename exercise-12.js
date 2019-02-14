function countProfit(shoppers) {
    var listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
  
    // you can only write your code here!
    
if(shoppers.length==0){
    return []
}

    var display = []
    var displayObj = {}

    for (let i=0; i<listBarang.length; i++){
        var displayObj = {
         product: listBarang[i][0],
         shoppers: [],
         leftOver: listBarang[i][2],
         totalProfit: 0
        }
        display.push(displayObj)
    }
    
    for (let j=0; j<display.length; j++){
        var untung = 0
        for (let i=0; i<shoppers.length; i++){
       
            if(shoppers[i].product===display[j].product && shoppers[i].amount <= display[j].leftOver){
                if (shoppers[i].product==='Sepatu Stacattu'){
                    display[j].shoppers.push(shoppers[i].name)
                    untung += shoppers[i].amount*1500000
                    display[j].leftOver -= shoppers[i].amount
                }
                if (shoppers[i].product==='Baju Zoro'){
                    display[j].shoppers.push(shoppers[i].name)
                    untung += shoppers[i].amount*500000
                    display[j].leftOver -= shoppers[i].amount
                }
                if (shoppers[i].product==='Sweater Uniklooh'){
                    display[j].shoppers.push(shoppers[i].name)
                    untung += shoppers[i].amount*175000
                    display[j].leftOver -= shoppers[i].amount
                }
                

            }
            
        }
        display[j].totalProfit= untung
    }

    

    return display

  }
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  console.log('\n')
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]

  console.log('\n')
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log('\n')
  console.log(countProfit([])); //[]