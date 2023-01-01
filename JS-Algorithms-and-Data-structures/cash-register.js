function checkCashRegister(price, cash, cid) {
    // money names and values for iteration
    const moneyName = ['ONE HUNDRED','TWENTY','TEN','FIVE','ONE','QUARTER','DIME','NICKEL','PENNY']
    const moneyValue = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01]
  
    // what is owed
    let change = cash - price;
    let changeShouldBeReturned = change;
    
    // the obj that should be returned 
    let toBeReturned = {status: "OPEN", change:[]};
  
    for(let i = 0; i<moneyValue.length; i++){
      // no need to continue the iteration if the amount is sorted already
      if(change===0){
        break
      }
  
      // how many of this type of money can we use
      let test = Math.floor(change.toFixed(2)/moneyValue[i])
      
      // change amount should be bigger than eash bill of this type
      if(test>=1){
        // how mush of this type of bill
        let toBeSaved = moneyValue[i] * test
  
        // do we have this mush of this type of bill?
        let index = moneyValue.length-1-i
        // no
        if(cid[index][1] < toBeSaved){
          toBeSaved = cid[index][1]
          toBeReturned.change.push([moneyName[i], toBeSaved])
          change -= toBeSaved
          
        }
        // yes
        else{
          toBeReturned.change.push([moneyName[i], toBeSaved])
          change -= toBeSaved
          
        }
      }
    }
    // sort from highest to lowest
    toBeReturned.change.sort((a,b)=>b[1]-a[1])
  
    // check for low money situations
    const availableInCID = cid.reduce((total,current)=>{
      return total+current[1]
    },0)
    const changeWillBeReturned = toBeReturned
    .change
    .reduce((total,current)=>{
      return total+current[1]
    },0)
  
    //INSUFFICIENT_FUNDS
    if(changeWillBeReturned < changeShouldBeReturned){
      toBeReturned.status = 'INSUFFICIENT_FUNDS'
      toBeReturned.change = []
    }
    //CLOSED
    if(availableInCID === changeShouldBeReturned){
      toBeReturned.status = 'CLOSED'
      toBeReturned.change = cid
    }
    return toBeReturned;
  }
  