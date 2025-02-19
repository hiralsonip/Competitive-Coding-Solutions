// Convert a CSV string into an array of objects.

const csvData = "name,age,city\nAlice,25,NY\nBob,30,LA";
console.log(parseCSV(csvData));

function parseCSV(csv) {
    const [header, ...row] = csv.split("\n");

    let result = [];
    for (let i = 0; i < row.length; i++) {
        let [rName, rAge, rCity] = row[i].split(",")
        result.push({ name: rName, age: rAge, city: rCity });
    }
    return result;
}