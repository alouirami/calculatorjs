const Calculator = require("./calculator");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('quel est la valeur de x? ', x => {
    readline.question('quel est la valeur de y? ', y => {
        readline.question('quel est la operation que vous voulez faire? ', opp => {
        if(opp=='add'){
            console.log(new Calculator(parseInt(x),parseInt(y)).add())
            
        }
        if(opp=='sub'){
            console.log(new Calculator(parseInt(x),parseInt(y)).sub())
            
        }
        if(opp=='mult'){
            console.log(new Calculator(parseInt(x),parseInt(y)).mult())
            
        }
        if(opp=='div' & parseInt(y)>0){
            console.log(new Calculator(parseInt(x),parseInt(y)).div())
            
        }
        
        readline.close();  
          })
        
      })
   
  });
