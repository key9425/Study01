// 1. 객체 생성 - 2가지 방식
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
// key : value
// - key: 문자, 숫자 타입만 가능 (띄어쓰기가 포함된 문자열은 따옴표로 감싸야 한다)
// - value: 타입(문자, 숫자, 불리언, 함수, 객체) 제한 없음
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
  extra: {},
  10: 20,
  "like cat": true,
};

// 3. 객체 프로퍼티 다루는 방법
// 3-1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
// - 존재하지 않는 프로퍼티에 접근시 undefined 값을 반환
let name = person.name;
let age = person["age"]; // key를 문자열로 명시 (따옴표를 사용하지 않으면 변수로 인식되어 오류가 발생할 수 있다)

// 변수에 접근하고자 하는 키 값을 담아 프로퍼티에 접근할 수 있기 때문에
// 동적으로 변화시키면서 접근할 때는 괄호 표기법을 이용
let property = "hobby";
let hobby = person[property];

// 3-2. 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

// 3-3. 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜렛";

// 3-3. 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3-5. 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person; // true
let result2 = "cat" in person; // false

console.log(person);
