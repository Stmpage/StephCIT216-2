function writer(mpg, gas, miles, message){

    let ele = document.createElement("div");

    let sum = (number1 * number2);
    ele.innerHTML= message1 +number1+ " miles at $" +number2+ " per gallon it would cost $" +sum;
    ele.innerHTML=message2 +number1+ " miles at $" +number2+ " per gallon it would cost $" +sum;
    ele.innerHTML=message3 +number1+ " miles at $" +number2+ " per gallon it would cost $" +sum;
    ele.innerHTML=message4 +number1+ " miles at $" +number2+ " per gallon it would cost $" +sum;

    document.body.querySelector(".box").appendChild(ele);

}

let message1=("To drive a car with a MPG rating of 12 for ");
let message2=("To drive a car with a MPG rating of 17 for ");
let message3=("To drive a car with a MPG rating of 26 for ");
let message4=("To drive a car with a MPG rating of 29 for ");
let number1 = Number(prompt("What is the estimated number of miles per year you drive?"));
let number2= Number(prompt("What is the current cost of a gallon of gasoline in your area?"));

writer(message1);
writer(message2);
writer(message3);
writer(message4);

