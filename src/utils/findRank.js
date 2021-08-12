import { find } from 'lodash';

export default function findRank(value, rankArr) {
  return find(rankArr, (rankValue) => {
    if (rankValue < rankArr[rankArr.length - 1]) {
      // not last value
      return rankValue >= value;
    }
    if (rankValue === rankArr[rankArr.length - 1]) {
      // last value
      return value >= rankValue;
    }
  });
}
