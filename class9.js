// Loops => repetitive tasks
// starting point, condition, updation
// For Loop

// for(let i = 0; i < 10; i++){
//     console.log("My Value is: " + i)
// }

// while loop
// let lives = 3;
// while(lives > 0){
//     console.log("Playling..... Lives Left: " + lives)
//     lives--
// }
// let lives = 1;
// while(lives <= 3){
//     console.log("Playling..... Lives Left: " + lives)
//     lives++
// }

// Do While
// let slices = 50; 
// do{
//     console.log("Eating 1 pizza Slice");
//     slices++;
// } while(slices < 3);

// For of loop
// const bag = ["Books", "Pens", "Bottle"];

// console.log(bag[1])

// console.log("Loop Started......")
// for(const i of bag){
//     // console.log("Item ", i)
//     // console.log("Loop Continue.....")
// }
// console.log("Loop Ended......")

// const student = ["Ali", 23, "Chemistry"] // Array
// const std = { name: "Ali", age: 23, favSub: "Chemistry"} // Obj

// For in Loop
// const phone = { brand: "IPhone", battery: "20%", color: "Grey" };

// for(const k in phone){
//     console.log(k + ":" + phone[k])
// }

// Map, Filter, Reduce

// Map
// const prices = [100,200,300];

// const doublePrices = prices.map((p) => p * 2);

// console.log("Actual Prices ", prices)
// console.log("Dohbled Prices ", doublePrices);

// Filter

// const scores = [20, 30, 55, 77, 68, 89];

// const highestScores = scores.filter((s) => s > 50);

// console.log(scores);
// console.log(highestScores)

// Reduce
const bill = [50, 30, 20];

const total = bill.reduce((sum, item) => sum + item, 0);
console.log("Total Bill: ", total)



