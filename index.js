produceDrivingRange(){ 
   return function(marketMultiplier) {
    return marketMultiplier * manufacturePrice;
  };
}