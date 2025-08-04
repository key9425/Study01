// 1. Number Type
let num1 = 27; // 정수
let num2 = 1.5; // 실수
let num = -20; // 음수

let int = Infinity; // 양의 무한대
let mInf = -Infinity; // 음의 무한대
let nan = NaN; // not a number, 수치연산이 실패했을 때의 결과값으로 보통 사용
// console.log(1 * "hello"); // 출력 : NaN -> 불가능한 수치 연산 시 프로그램이 종료되지 않음

// 1-1. 기본적인 사칙연산 지원
console.log(num1 + num2); // 덧셈
console.log(num1 - num2); // 뺄셈
console.log(num1 * num2); // 곱셈
console.log(num1 / num2); // 나눗셈
console.log(num1 % num2); // 나머지 (모듈러 연산)

// --------------------------------------------------------------------------

// 2. String Type
let myName = "이정환"; // " or ' 사용 -> ", '를 사용하지 않으면 변수명으로 취급하여 오류가 발생할 수 있음

// 2-1. 덧셈 연산 지원
let myLocation = "목동";
let introduce = myName + myLocation;
// console.log(introduce); // 출력 : 이정환목동

// 2-2. 템플릿 리터럴 문법
let introduceText = `${myName}은 ${myLocation}에 거주합니다`; // `(backtick) 사용 => ${}를 사용하면 변수값을 동적으로 문자열에 포함시킬 수 있다
// console.log(introduceText); // 출력 : 이정환은 목동에 거주합니다

// --------------------------------------------------------------------------

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// --------------------------------------------------------------------------

// 4. Null Type (아무것도 없다)
let empty = null;

// --------------------------------------------------------------------------

//  5. Undefined Type
let None; // 변수 선언 시 초기화하지 않았을 경우 자동으로 할당되는 값
console.log(None); // 출력 : undefined

// --------------------------------------------------------------------------

// Null vs Undefined
// - 공통 : 아무것도 없음을 의미하는 값
// - Null : 직접 명시적으로 할당하는 값
// - Undefined ; 자동으로 할당되는 값
