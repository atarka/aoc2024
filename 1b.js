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

const hashimoto = lists[1].reduce((acc, v) => (acc[v] = (acc[v] ?? 0) + 1, acc), {});
const result = lists[0].reduce((acc, v) => acc + (hashimoto[v] ?? 0) * v, 0);

console.log(result);

