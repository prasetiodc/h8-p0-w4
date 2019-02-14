function highestScore(students) {
    // Code disini


    var obj ={}
    for (var i=0; i<students.length; i++){
        if( obj[students[i].class] == undefined){
            obj[students[i].class] = [];
        }

            
        var newObj = {}
        for (asd in students[i]){
            if (asd != "class"){
                newObj[asd]  = students[i][asd]
            }
        }

        obj[students[i].class].push(newObj)
    }

    // console.log(obj)
    // console.log(newObj)
    // obj

    for ( asd in obj){                              //OUTPUT:   key dari obj
        var highest = 0
        var highestobj={}
        for (var i=0; i<obj[asd].length; i++){      
            //    obj[foxes][0].score
            if(obj[asd][i].score>highest){
                highest = obj[asd][i].score
                highestobj = obj[asd][i]
            }
        }
        obj[asd] =  highestobj
    }
    return obj

  }
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
console.log('\n')
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  console.log('\n')
  console.log(highestScore([])); //{}
