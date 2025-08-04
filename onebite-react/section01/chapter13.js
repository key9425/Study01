// 1. 콜백함수
function main(value) {
  value();
}

function sub() {
  console.log("i am sub");
}

main(sub); // 함수도 값으로 취급되기 때문에 함수 자체를 다른 함수의 인수로 전달하는 것도 가능
// // 함수 표현식
// main(function sub() {
//   console.log("i am sub");
// });
// // 익명 함수
// main(function () {
//   console.log("i am sub");
// });
// // 화살표 함수
// main(() => {
//   console.log("i am sub");
// });

// -------------------------------------------------------------------------

// 2. 콜백함수의 활용 - 중복 코드 개선

// function repeat(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx);
//   }
// }

// function repeatDuble(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx * 2);
//   }
// }

function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});
