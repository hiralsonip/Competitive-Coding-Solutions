// Building from the first question) Write a function which will take an Input String, Source and Destination that have no direct connecting flight, and output a route that you can take to reach the destination. The output should be in the format: return {'route': 'US -> UK -> FR', 'method': 'RyanAir -> Jet1', 'cost': 10}

let s = "UK:US:FedEx:4,UK:FR:Jet1:2,US:UK:RyanAir:8,CA:UK:CanadaAir:8";

console.log(findRoute(s, "CA", "FR"));
// Output: { route: 'CA -> UK -> FR', method: 'CanadaAir -> AirFrance', cost: 11 }

console.log(findRoute(s, "UK", "US"));
// Output: { route: 'UK -> US', method: 'FedEx', cost: 4 }

console.log(findRoute(s, "US", "CA"));
// Output: { route: 'No route found', method: '', cost: -1 }


function findRoute(s, source, destination) {

    if (source.length == 0 || destination.length == 0) return 0;

    let map = new Map();

    // build map
    s.split(",").forEach(f => {
        let [start, end, airline, cost] = f.split(":");
        if (!map.has(start)) {
            map.set(start, []);
        }
        map.get(start).push([end, airline, parseInt(cost)]);
    });

    // find the route
    let queue = [[source, [], [], 0]];
    while (queue.length) {
        let [city, path, method, totalCost] = queue.shift();
        // if destination is found
        if (city === destination) {
            return {
                route: path.concat(city).join("->"),
                method: method.join("->"),
                cost: totalCost
            }
        }

        (map.get(city) || []).forEach(([next, airline, cost]) => {
            queue.push([next, path.concat(city), method.concat(airline), totalCost + cost])
        })
    }
    return { route: "No route found", method: "", cost: -1 }

}

console.log(findCost(s, "UK", "UK"));