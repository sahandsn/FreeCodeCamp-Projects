function palindrome(str) {
    let target = str.toLowerCase().match(/[a-z0-9]/gi)
    if(target.join("") === target.reverse().join("")){
      return true;
    }else{
      return false;
    }
  }