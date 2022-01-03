"use strict";
/*function logger() {
    console.log('My name is Jonas');
}
logger();
logger();
//make a juice machine using 5 apple and 4 orange///
function cutFruitePieces(fruite){
    return fruite*4;
}
function fruitePices(apples,oranges){
    const applePieces=cutFruitePieces(apples);
    const orangesPieces=cutFruitePieces(oranges);
    const juice=`Juice with ${applePieces} applepieces  and ${orangesPieces} orangepieces!`
    return juice;

}
console.log(fruitePices(5,4));*/
/*Sakib was born 2001 & Sharif was born 2000...now calculate their retirement time*/
/*const calcage=function(birthYear){
    return 2021-birthYear;
}
const yearUntilRetirement=function(birthYear,firstName){
    const age=calcage(birthYear);
    const retirement=65-age;
    if (retirement>0){
        console.log(`${firstName} will retire in next ${retirement} year!`);
    }  else if(retirement<0){
        console.log(`${firstName} has already a retired person `);
    }
    return retirement;
}
console.log(yearUntilRetirement(2001,"Sakib Md Rezowan"));
console.log(yearUntilRetirement(2000,"Md Sharif Ullah"));
console.log(yearUntilRetirement(1950,"Boro Fufa"));
/*coding challenge-01*/
/*const calcAverage=(a,b,c)=>a+b+c/3;
const scoreDolPhine=calcAverage(44,23,71);
const scoreKoalas=calcAverage(65,54,49);
console.log(scoreDolPhine,scoreKoalas);
const checkWinner=function(avgDolphine,avgKoalas){
    if(avgDolphine>=2*avgKoalas){
        console.log(`Dolphin win ${avgDolphine} vs. ${avgKoalas}`);
        return;
    } else if(avgKoalas>=2*avgDolphine){
        console.log(`Koala win ${avgKoalas} vs. ${avgDolphine}`);
        return;
    }
    else{
        console.log("No one win");
    }

} 
checkWinner(scoreDolPhine,scoreKoalas);*/
/*const calcTip=function(bill){
    return bill>=50 && bill <=300 ? bill*.15:bill*.2;
}
const bills =[125,555,44];
const tip=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
const total=[bills[0]+tip[0],bills[1]+tip[1],bills[2]+tip[2],];
console.log(bills,tip,total);*/

//  const country='portugal';
//  const continent='Europe';
//   let population=10;
//   population+=1;
//   let populationOfFinland=6;
//   let compare=population>populationOfFinland;
//   console.log(compare);
//   let splitPopulation=population/2;
//   console.log(splitPopulation);

//   console.log(country);
//   console.log(continent);
//   console.log(population);
//  const isLand=true;
//  let language;
//  language="bangla"
//   console.log(typeof isLand);
//  console.log(typeof language);
//  let markMass=78;
//  let johnMass=92;
//  let markHeight=1.69;
//  let johnHeight=1.95;
//  const markBMI=markMass/markHeight**2;
//  const johnBMI=johnMass/johnHeight**2;
//  if(markBMI>johnBMI){
//      console.log(`Mark has higher BMI(${markBMI}) than John(${johnBMI})! `)
//  } else if(markBMI>johnBMI){
//     console.log(`John has higher BMI(${johnBMI} )than John(${markBMI})! `)
// }
// let bill;
// bill=430;
// const tip=bill>=50 && bill<=300 ?bill*.15: bill*.20;
// console.log(`The bill was ${bill} and the tip was ${tip} and total value is ${bill+tip}`);
// const numberNeigbours=prompt('How many neigbour country does your country have?:');
// if(numberNeigbours==1){
// console.log("Only one border!");
// }
// function cutFruitePieces(fruite){
//     return fruite*4;
// }
// function fruiteProcessor(apples,oranges){
//     const applePieces=cutFruitePieces(apples);
//     const orangePieces=cutFruitePieces(oranges);
//     const juice=`Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces!`;
//     return juice;
// }
// const fruiteJuice=fruiteProcessor(4,6);
// console.log(fruiteJuice);

/*object*/
/*const jonas={
    firstName:'Sakib',
    lastName:'Rezowan',
    age:2021-2001,
    friends:['sharif','shaiful','buriya'],
}
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);
const sakib=prompt('what do you know about Sakib?Choose between firstName,lastName,age');
console.log(jonas[sakib]);*/
// const marks={
//      fullName:'Mark Miller',
//     mass:78,
//     height:1.69,calBMI:function(){
//         this.bmi=this.mass/this.height**2;
//         return this.bmi;

//     }
// }
// const jhons={
//     fullName:'Jhon Smith',
//     mass:92,
//     height:1.95,
//     calBMI:function(){
//         this.bmi=this.mass/this.height**2;
//         return this.bmi;
//     }

// }
// jhons.calBMI();
// marks.calBMI();
// if(jhons.bmi>marks.bmi){
// console.log(`${jhons.fullName}'s BMI ${jhons.bmi} is higher than ${marks.fullName}'s BMI ${marks.bmi}`);
// } else{
// console.log(`${marks.fullName}'s BMI ${marks.bmi} is higher than ${jhons.fullName}'s BMI ${jhons.bmi}`);
// };
// const calcTip=function(bill){
//     return bill>=50 && bill<=300 ? bill*.15:bill*.2;
// }
// const bills=[22,295,176,440,37,105,10,1100,86,52];
// const tips=[];
// const totals=[];
// for (let i=0; i<bills.length; i++){
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip+bills[i]);
// }
// console.log(bills,tips,totals);
// const calcAverage=function(arr){
//     let sum=0;
//      for(let i=0; i<arr.length;i++){
//          sum+=arr[i];
//      }
//      return sum/arr.length;
// }
// console.log(calcAverage([2,3,7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips))
//  const sakib={
//      fullName:'Sakib Md Rezowan',
//      fathersName:'Md Shahid Ullah',
//      birthYear:prompt('enter your birthday'),
//      friends:['Sharif','Nazmul','Rayhan','Shaiful'],
//      calcAge:function(){

//         return 2021-this.birthYear ;
//      }

//  };
// console.log(sakib.calcAge());
// for(let i=1;i<=10;i++){
//     console.log(`rayhan is a bolod number ${i}`)
// }
// const birthday=[2001,2000,1999,1997,2001];
// const age=[];
// for(let i=0;i<=birthday.length;i++){
// age.push(2021-birthday[i]);
// }
// console.log(age);
// ----- guess my number-------

// document.querySelector(".massege").textContent = "correct number";
// console.log(document.querySelector(".massege").textContent);
// document.querySelector(".number").textContent = 10;
// document.querySelector(".score").textContent = 20;
// document.querySelector(".guess").value = 29;
// console.log(document.querySelector(".guess").value);

// let secratNumber = Math.trunc(Math.random() * 20) + 1;

// let score = 20;
// let highScore = 0;

// document.querySelector(".check").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);
//   console.log(guess);
//   if (!guess) {
//     document.querySelector(".massege").textContent = "No number";
//   } else if (guess === secratNumber) {
//     document.querySelector(".massege").textContent = "correct number";
//     score++;
//     document.querySelector(".score").textContent = score;
//     document.querySelector("body").style.backgroundColor = "#60b347";
//     document.querySelector(".number").style.width = "30rem";
//     document.querySelector(".number").textContent = secratNumber;
//     if (score > highScore) {
//       highScore = score;
//       document.querySelector(".highscore").textContent = highScore;
//     }
//   } else if (guess !== secratNumber) {
//     if (score > 1) {
//       document.querySelector(".massege").textContent =
//         guess > secratNumber ? "too high" : "too low";
//       score--;
//     }
//   } else if (guess > secratNumber) {
//     if (score > 1) {
//       document.querySelector(".massege").textContent = "too high";
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".massege").textContent = "you lost the game";
//     }
//   } else if (guess < secratNumber) {
//     if (score > 1) {
//       document.querySelector(".massege").textContent = "too low";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".massege").textContent = "you lost the game";
//     }
//   }
// });
// document.querySelector(".again").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);
//   secratNumber = Math.trunc(Math.random() * 20) + 1;

//   score = 20;
//   document.querySelector(".massege").textContent = "start guessing...";
//   document.querySelector(".score").textContent = score;
//   document.querySelector(".number").textContent = "?";
//   document.querySelector(".guess").value = "";
//   document.querySelector("body").style.backgroundColor = "white";
//   document.querySelector(".number").style.width = "15rem";
// });
// console.log(document.querySelector(".massege").textContent);
// document.querySelector(".massege").textContent = "correct number";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
const displayMassege = function (massege) {
  document.querySelector(".massege").textContent = massege;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMassege("no number");
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess === secretNumber) {
    displayMassege("currect number");
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector("body").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".highscore").textContent = score;
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMassege(guess > secretNumber ? "too high" : "too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMassege("you lost the game");
    }
    // } else if (guess < secretNumber) {
    //   if (score > 0) {
    //     displayMassege("too low");
    //     score--;
    //     document.querySelector(".score").textContent = score;
    //   } else {
    //     displayMassege("you lost the game");
    //   }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  displayMassege("start guessing");
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector(".number").style.width = "15rem";
});
