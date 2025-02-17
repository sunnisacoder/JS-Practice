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