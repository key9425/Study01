// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것
let num = 10;
let str = "20";
const result = num + str; // 1020

// ---------------------------------------------

// 2. 명시적 형 변환
// -> 프로그래머가 내장함수 등을 이용해서 직접 형 변환을 명시

// 2-1. 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1); // 출력 : 20

// 2-2 숫자 외에 다른 값이 포함되어 있는 문자열 값을 숫자 값으로 형 변환
// 주의) 문자가 앞에 있을 경우 형 변환이 일어나지 않을 수도 있음
let str2 = "10개";
let strToNum2 = parseInt(str2); // 10
// let strToNum2 = Number(str2); // NaN

// 2-3. 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다"); // 출력 : 20입니다
