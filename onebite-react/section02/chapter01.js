// Truthy & Falsy
// - 참이나 거짓을 의미하지 않는 값도, 조건문 내에서 참이나 거짓으로 평가하는 특징
// - JS의 모든 값은 Truthy 하거나 Falsy 한다

// 1. Falsy 한 값 : 조건문에서 거짓으로 평가하는 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// 2. Truthy 한 값 : 조건문에서 참으로 평가하는 값
// -> 7가지 Falsy 한 값들 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 활용 사례
// - 복잡한 조건문을 간결하게 효율적으로 개선 가능
function printName(person) {
  // if (person === undefined || person === null) {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

// let person;
// let person = null;
let person = { name: "이정환" };
printName(person);
