produceDrivingRange(d1, d2){ 
   return function(checker) {
    let myRe = /[0-9]/g;
    let a1 = d1.match(myRe).join('');
    let a2 = d2.match(myRe).join('');
    if Math.
  };
}

it('takes an argument of blockRange which is then used to calculate if something is within range', function(){
      let eightBlockRange = produceDrivingRange(8)
      expect(eightBlockRange('10th', '20th')).to.equal('2 blocks out of range')
      expect(eightBlockRange('10th', '14th')).to.equal('within range by 4')
    })
