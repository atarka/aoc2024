const values = `3   4
4   3
2   5
1   3
3   9
3   3`;

const lists = values
    .split(/\n/)
    .map(v => v.split(/[ \t]+/))
    .reduce((acc, v) => ([[...acc[0], v[0]], [...acc[1], v[1]]]), [[], []]);

lists.forEach(list => list.sort());
const result = lists[0].reduce((acc, v, i) => acc + Math.abs(v - lists[1][i]), 0);

console.log(result);

