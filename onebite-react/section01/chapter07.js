// 1. 대입 연산자
let var1 = 1;

// ---------------------------------------------------------

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

// *, /, % 연산자가 +, - 연산자보다 우선순위가 높다
let num6 = 1 + 2 * 10; // 21
let num7 = (1 + 2) * 10; // 30

// ---------------------------------------------------------

// 3. 복합 대입 연산자
let num8 = 10;
num8 += 20;
num8 -= 20;
num8 *= 20;
num8 /= 20;
num8 %= 20;

// ---------------------------------------------------------

// 4. 증감 연산자
// -> 값을 1씩 늘리거나 또는 1씩 줄일 때 사용하는 연산자
let num9 = 10;
num9++; // 후위 연산 : 해당 라인이 끝나고 1이 증감된다
--num9; // 전위 연산 : 해당 라인에서 즉시 1이 증감된다

// ---------------------------------------------------------

// 5. 논리 연산자
let or = true || false;
let and = true && true;
let not = !true;
console.log(or, and, not); // true true false

// ---------------------------------------------------------

// 6. 비교 연산자
let comp1 = 1 === 2; // 동등 비교 연산자
let comp2 = 1 !== 2; // 비동등 비교 연산자
console.log(comp1, comp2); // false true

let comp3 = 1 == "1"; // 값이 자료형까지 같은지는 비교 X
let comp4 = 1 === "1";
console.log(comp3, comp4); // true false

let comp5 = 2 > 1;
let comp6 = 2 < 1;
let comp7 = 2 >= 2;
let comp8 = 2 <= 2;
console.log(comp5, comp6, comp7, comp8); // true false true true
