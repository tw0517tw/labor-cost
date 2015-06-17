"use strict";

const _ = require("underscore");

module.exports = (value, rankArr) => {
  return _.find(rankArr, (rankValue)=>{
    if(rankValue < rankArr[rankArr.length - 1]){ //not last value
      return rankValue >= value;
    } else if(rankValue === rankArr[rankArr.length - 1]) { //last value
      return value >= rankValue;
    }
  });
};
