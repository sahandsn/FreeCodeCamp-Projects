function rot13(str) {
    let target = str
    .split("")
    .map((x)=>{
      if(/[A-Z]/.test(x)){
        let newLetter = x.charCodeAt(0) + 13
        if(newLetter>90){
          newLetter -= 26
        }
        return String.fromCharCode(newLetter)
      }else{
        return x
      }
    })
    return target.join("")
  }