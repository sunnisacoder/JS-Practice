/*
// 讓js等於amazing，如果js是amazing，就跳出alert視窗
let js = 'amazing';
// if (js === 'amazing') alert('js is fun');

 //沒有請他印在前端，故不會出現
40 + 8 + 30;
// 加上console.log 他會印在控制台當中
console.log(40 + 8 + 30);

console.log('Sunny');
console.log(1999);

let firstName = 'Sunny'; //宣告一個變數，如果沒有宣告成firstName，就要手動更改三個地方
console.log(firstName, 1);
console.log(firstName, 2);
console.log(firstName, 3);

let PI = 3.1415; //如果是常數，全大寫
*/

/*
// true;
let js = true;
console.log(js)

console.log(typeof true);
console.log(typeof js);
console.log(typeof 23);
console.log(typeof 'Sunny');

js = '從boolean換成string' //動態類型
console.log(typeof js);

let year; //當宣告一個空v，會自動保存為 undefined 的值
console.log(year);
console.log(typeof year);

year = 1999;
console.log(typeof year);

console.log(typeof null);//控制台說 null 是一個物件，但其實這是js的bug，他應該要返回 null 才對
*/

/*
let age = 25; // 用 let 創建的變量是可變的，like 歲數
age = 26;

const birthYear = 1999;// 用 const 創建的變量是不可變的，like 我們的出生年份
// birthYear = 1998;

// const job; //使用const時，一定要設定初始值

// ======== math operators ======
const now = 2025;
const ageSunny = now - 1999;
const ageHannah = now - 1991;
console.log(ageSunny, ageHannah);

console.log(ageSunny * 2, ageSunny / 5, 2 ** 3);
// 2 ** 3 ＝ 2的三次方

const firstName = 'Sunny';
const lastName = 'fan';
console.log(firstName +' ' + lastName);

// ======== assignment operators ======
let x = 10 + 5; //15
x += 10; // re-assign x，x = x + 10 = 25
x *= 4; //100
x ++; // 101
x --; // 100
console.log(x);

// ======== comparison operators(boolean value) ======
//  > , < , >= , <=
console.log(ageSunny > ageHannah); //false
console.log(ageSunny >= 18); //是否成年 true

*/

const now = 2025;
const ageSunny = now - 1999;
const ageHannah = now - 1991;

let x, y;
x = y = 10 + 2; //x=y=12, y=12, x=12
console.log(x, y);

//========practice ======
/*
const country = "Taiwan";
const continent = "Asia";
let population = "24";
const isIsland = false;
const language = "Taiwanese";

console.log(country,continent,population);
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

console.log(population / 2);
population ++;
console.log(population);
console.log(population > 6);
console.log(population <= 33);

// const description = 
//     country + 
//     ' is in ' + 
//     continent + 
//     ', and its '+
//     population + 
//     ' million people speak ' + 
//     language;

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(description); 

if (population > 33) {
    console.log(`${country}'s population is above average`);
}else{
    console.log(`${country}'s population is ${33 - population} million below average`);
}
*/

/*
//======== Coding Challenge #1 ======
// const markMass = 78;
// const johnMass = 92;
// const markHeight = 1.69;
// const johnHeight = 1.95;

const markMass = 95;
const johnMass = 85;
const markHeight = 1.88;
const johnHeight = 1.75;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log( markBMI, johnBMI, markHigherBMI);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
}
*/


/*
const firstName = 'Sunny';
const job = 'enigneer';
const year = 2025;
const birthYear=1999;

const sunny = "I'm "+firstName+', a '+(year - birthYear)+' years-old '+job+'!';
console.log(sunny);
const sunnyNew=`I'm ${firstName}, a ${year - birthYear} years-old ${job}!`;
console.log(sunnyNew);
console.log(`hi 
hius`);
*/

/*
const age = 15;

if (age >= 18) {
    console.log(`sunny can drive 💰`);
} else {
    const yearLeft = 18 - age;
    console.log(`No you can't drive. wait for ${yearLeft} years ha`);
}

const birthYear = 1999;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21
}
console.log(century);
*/

/*
// type conversion
const inputYear = '1999';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);

console.log(Number('Sunny')); //not a number
console.log(typeof NaN); //它還是一個數字，只是是一個無效的數字

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);

console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> '617'
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143
*/

////////////////////////////////////
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const age = 18;
if (age === 18) console.log('adult strict');
if (age == 18) console.log('adult loose');

const fav = Number(prompt("what's your fav number?"));
console.log(fav);
console.log(typeof fav);

if (fav === 22) {
    console.log("22 is a number.");
} else if (fav === 7) {
    console.log("7 is a lucky nubmer");
} else {
    console.log("haha nice try.")
}

if (fav !== 22) console.log("why not 22");

const numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));

if (numNeighbours == 1) {
    console.log("Only 1 border!");
} else if(numNeighbours > 1) {
    console.log("More than 1 border");
}else{
    console.log("No borders");
}

// 在未將 prompt 轉成數值，更換成 ===，輸入１時，變成 No borders
if (numNeighbours === 1) {
    console.log("Only 1 border!"); 
} else if(numNeighbours > 1) {
    console.log("More than 1 border");
}else{
    console.log("No borders");
}
*/
////////////////////////////////////
const hasDriversLicense = true; //a
const hasGoodVision = true; //b

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
    console.log("drive");
} else {
    console.log("dont drive");
}

const isTired = false; //c
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("drive 2");
} else {
    console.log("dont drive 2");
}
////////////////////////////////////
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. 
The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100.
With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. 
HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks. 😉

4. BONUS 2: Minimum score also applies to a draw! 
So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. 
Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

/*
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas) {
    console.log("Koalas win the trophy");
} else {
    console.log("Both win the trophy");
}
*/

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;

if(scoreDolphins > scoreKoalas){

}else if(scoreDolphins < scoreKoalas){

}