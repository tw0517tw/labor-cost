import findRank from '../findRank';

it('works', () => {
  const rankArr = [100, 200, 300, 400];

  expect(findRank(100, rankArr)).toBe(100);
  expect(findRank(150, rankArr)).toBe(200);
  expect(findRank(200, rankArr)).toBe(200);
  expect(findRank(250, rankArr)).toBe(300);
  expect(findRank(500, rankArr)).toBe(400);
});
