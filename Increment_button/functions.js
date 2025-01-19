
// create a countdown function

function countdown() {
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
}

countdown()

// create a function to consol.log number 42

function number() {
    console.log(42);
}

number()

let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

// create a function that logs out the sum of all the lap times

function lapTimes() {
    // let times = lap1 + lap2 + lap3;
    // console.log(times);
    console.log(lap1 + lap2 + lap3)
}

// with variable times the console.log outside the function would't work

lapTimes()



let lapsCompleted = 0;

// Create a function that increments the lapsCompleted variable with one
// Run it 3 times

function laps() {

    lapsCompleted = (lapsCompleted + 1) * 3;
    
}
laps();
console.log(lapsCompleted)



