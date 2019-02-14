function shoppingTime(memberId, money) {
    // you can only write your code here!
    var listPurches = []
    var moneyFirst = money

    if(memberId==='' || memberId === undefined){
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    }else if(money<50000){
        return "Mohon maaf, uang tidak cukup"
    }

    if(money>=1500000){
        money-=1500000
        listPurches.push("Sepatu Stacattu")
    }
    if(money>=500000){
        money-=500000
        listPurches.push("Baju Zoro")
    }
    if(money>=250000){
        money-=250000
        listPurches.push("Baju H&N")
    }
    if(money>=175000){
        money-=175000
        listPurches.push("Sweater Uniklooh")
    }
    if(money>=50000){
        money-=50000
        listPurches.push("Casing Handphone")
    }

    //input ke obj
    var obj = {
        memberId: memberId,
        money: moneyFirst,
        listPurchased: listPurches,
        changeMoney: money
    }

    return obj

  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja