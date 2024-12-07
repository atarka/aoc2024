const values = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

const reports = values
    .split(/\n/)
    .map(v => v.split(/[ \t]+/).map(Number));

const goodReports = reports
    .reduce((cnt, report) =>
        report.slice(1).reduce((flag, a, i) => {
            const b = report[i];
            const delta = a - b;

            if (flag === false) return flag;
            else if (Math.abs(delta) > 3 || delta === 0) return false;
            else if (flag === 0) flag = delta < 0 ? -1 : 1;
            else if (flag > 0 && delta < 0) return false;
            else if (flag < 0 && delta > 0) return false;
            return flag;
        }, 0) === false ? cnt : cnt + 1, 0);

console.log(goodReports)
