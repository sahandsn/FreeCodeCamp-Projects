function convertToRoman(num) {
    //Roman and Decimal numbers
    const denominator = [1000, 900,500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const dict = ["M","CM","D","CD","C","XC","L","XL","X","IX", "V","IV","I"]
    //base case
    if(denominator.includes(num)){
      return dict[denominator.indexOf(num)]
    }
    if(num===0){
      return ""
    }
    //recursive call
    let quotient;
    let remainder;
    for(let i = 0; i<denominator.length; i++){
      let test = num/denominator[i]
      if(test>=1){
        quotient = dict[i].repeat(test)
        remainder = num%(denominator[i]*Math.floor(test))
        break;
      }
    }
    return quotient += convertToRoman(remainder) 
  }