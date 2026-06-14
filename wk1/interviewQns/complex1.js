/*
In uber for first 5 kms its 50 rs even its below 5 or upto 5.
And for every 1km its 10 rs. And for first 30 mins its 50 rs and for every 15mins its 10rs
provide a logical reasoning code to get if a rider rides 30 kms in 30 mins
*/

const totalDistance = 30;
const totalTime = 30;

function calculateCostPerKm(distance) {
  let cost = 50;
  if (distance <= 5) {
    let price = cost;
    return price;
  } else {
    let remDist = distance - 5;
    let bal = remDist * 1;
    let price = bal + cost + 5;
    return price;
  }
}

console.log(
  "Total Cost for total Distance " + calculateCostPerKm(totalDistance)
);

function calculateCostPerMin(time) {
    let cost = 50;
    if(time <= 30) {
        let price = cost;
        return price;
    }
    else {
        let remTime = time - 30;
        let eachPrice = 0;
        let rem = remTime;

        while(rem > 0) {
            rem = rem - 15
            eachPrice = eachPrice + 10
        }
    let price = eachPrice + cost + 50;
    return price;
    }
}

console.log("Cost per min " + calculateCostPerMin(totalTime))

function totalCost() {
    let totalCost = calculateCostPerKm(totalDistance) + calculateCostPerMin(totalTime)
    return totalCost
}

console.log("Total Cost for the ride " + totalCost())