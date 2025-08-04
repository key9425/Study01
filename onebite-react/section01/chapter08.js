// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자
// -> 두 개의 피연사자가 모두 null, undefined가 아니라면 처음 값이 반환

let var1; // undefined
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // 10
let var5 = var1 ?? var3; // 20
let var6 = var2 ?? var3; // 10
let var7 = var3 ?? var2; // 20

let userName = "이정환";
let userNickName = "Winterlood";
let displayName = userName ?? userNickName; // 이정환

// -----------------------------------------------------------------

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var8 = 1;
var8 = "hello"; // 변수의 타입이 고정되어 있지 않음
let t1 = typeof var8; // string

// -----------------------------------------------------------------

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환

let var9 = 10;
let res = var9 % 2 === 0 ? "짝수" : "홀수"; // 요구사항 : 변수 res에 var9의 값이 짝수 -> "짝", 홀수 -> "홀"
