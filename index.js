function produceDrivingRange(c){ 
   return function(d1,d2) {
    let myRe = /[0-9]/g;
    let a1 = d1.match(myRe).join('');
    let a2 = d2.match(myRe).join('');
    let b = Math.abs(a1-a2); 
    if (b > c) { 
      return `${b-c} blocks out of range`; 
    } else {
      return `within range by ${c-b}`;
    }
  };
}




function produceTipCalculator(og_bill){
  return function(tip){ 
    return ob_bill * (tip); 
  }; 
}

let tenPercentTip = produceTipCalculator(.10)
      expect(tenPercentTip(50)).to.equal(5)
      expect(tenPercentTip(30)).to.equal(3)