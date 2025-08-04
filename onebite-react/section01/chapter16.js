// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

// 상수는 새로운 값을 할당하지 못하는 변수 -> 변경 불가능
// - 또 다른 객체를 생성해서 할당하거나 새로운 값을 할당하면 오류 발생
// animal = { a: 1 };
// animal = 123;

// 상수에 저장된 객체의 프러퍼티를 추가/수정/삭제 가능 (문제 X)
animal.age = 2; // 추가
animal.name = "까망이"; //수정
delete animal.color; // 삭제

console.log(animal);

// --------------------------------------------------------------------------

// 2. 메서드
// -> 값이 함수인 프로퍼티

const person = {
  name: "이정환",

  // 메서드
  //   sayHi: function () {
  //     console.log("안녕!");
  //   },

  //   sayHi: () => {
  //     console.log("안녕!");
  //   },

  // 메서드 선언
  sayHi() {
    console.log("안녕!");
  },
};

person.sayHi();
person["sayHi"]();
