/**
 *
 *
 */

// var val1 = "hoge";
// console.log(val1);

// val1 = "hoge2";
// console.log(val1);

// var val1 = "hoge3";
// console.log(val1);

// let val2 = "let-var";
// console.log(val2);

// val2 = "let-var2";
// console.log(val2);

// let val2 = "let-var3";

// const val3 = "const-var1";
// console.log(val3);

//val3 = "const-var2";
// const val3 = "const-var2";

// const val4 = {
//   name: "kw",
//   age: 19
// };
// console.log(val4);

// val4.name = "kw2";
// console.log(val4);

// val4.addres = "place1";
// console.log(val4);

// // var val5 = ["dog", "cat"];
// const val5 = ["dog", "cat"];
// console.log(val5);

// val5[1] = "bird";
// console.log(val5);

// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

//  const name = "snsk";
//  const age = 34;
//  const message1 = "my name is " + name + " and " + age;
//  console.log(message1);

//  const message2 = `my name is ${name}. I'm ${age} years old`;
// console.log(message2);

// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("Hello"));

// const func2 = (str) => {
//   return str;
// };
// console.log(func2("Bye"));

// const func3 = (str) => str;
// console.log(func3("ByeBye"));

// const func4 = (n1, n2) => {
//   return n1 + n2;
// };
// // const func4 = (n1, n2) => n1 + n2;
// console.log(func4(5, 11.5));

// const myProfile = {
//   name: "shin",
//   age: 38
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["shin", 28];
// const message3 = `名前は${myProfile[0]}。年は${myProfile[1]}です`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `name is ${name}, age is ${age}`;
// console.log(message4);

// const sayHello = (name = "Kawa") => console.log(`Hello ${name}`);
// sayHello("Shinsuke");
// sayHello();

// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);

// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [n1, n2, ...arr3] = arr2;
// console.log(n1);
// console.log(n2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

const nameArr = ["hoge", "fuga", "piyo"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// nameArr.map((name, index) =>
//   console.log(`${index + 1}番目は${nameArr[index]}です。`)
// );
//
// const numArr = [1, 2, 3, 4, 5];
// const nameNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });

// console.log(nameNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "hoge") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);
// const val1 = 1 < 0 ? "true" : "false";
// console.log(val1);

// const num = "1300";
// //const num = 1300;
// console.log(num.toLocaleString());

// const formattedNUm =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNUm);
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };
// console.log(checkSum(50, 20));

// const flag1 = true;
// const flag2 = false;
// if (flag1 || flag2) {
//   console.log("1か2はTrueです");
// }
// if (flag1 && flag2) {
//   console.log("1も2もTrueです");
// }

// const num = null;
// // const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

const num2 = null;
//const num2 = 100;
const fee2 = num2 && "何かせっていされました";
console.log(fee2);
