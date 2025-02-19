const transactionsList = [
    { date: "2024-01-30", amount: 100 },
    { date: "2024-01-31", amount: 50 },
    { date: "2024-01-30", amount: 75 }
];

// console.log(transactionsList[0].date);
groupTransaction(transactionsList)

function groupTransaction(list) {

    let group = list.reduce((acc, { date, amount }) => {
        if (!acc[date]) {
            acc[date] = []
        }
        acc[date].push({ date, amount })
        return acc;
    }, {});
    console.log(group);
}

