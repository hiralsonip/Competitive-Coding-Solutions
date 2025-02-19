// Given an input string: "UK:US:FedEx:4,UK:FR:Jet1:2,US:UK:RyanAir:8,CA:UK:CanadaAir:8" Which represents flights between destinations in the format: "Source:Destination:Airline:Cost,..." Write a function which will take a Source and Destination and output the cost.

let s = "UK:US:FedEx:4,UK:FR:Jet1:2,US:UK:RyanAir:8,CA:UK:CanadaAir:8";

function findCost(s, source, destination) {

    if (source.length == 0 || destination.length == 0) return 0;

    let flightArray = s.split(",");
    let cost = -1;
    for (let i = 0; i < flightArray.length; i++) {
        let detail = flightArray[i].split(":");
        // direct flight
        if (source == detail[0] && destination == detail[1]) {
            cost = detail[3];
        }
    }
    return cost === -1 ? "No flights found" : cost;
}

console.log(findCost(s, "UK", "UK"));