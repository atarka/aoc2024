const values = `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`;

const [pageOrders, manualsRaw]  = values.split(/\n\n/).map(section => section.split(/\n/));
const priors = pageOrders.map(str => str.split(/\|/)).reduce((acc, [prior, page]) => (acc[prior] = (acc[prior] ?? []).concat(page), acc), {});
const manuals = manualsRaw.map(manual => manual.split(','));
const isManualValid = manual => manual.every(((page, pageIndex) => (priors[page] ?? []).every(priorPage => !manual.slice(0, pageIndex).includes(priorPage))));
const result = manuals.reduce((acc, manual) => acc + (isManualValid(manual) ? Number(manual[Math.floor(manual.length / 2)]) : 0), 0);
console.log(result);




