// 1. 함수
// 함수 선언 (매개변수)
function getArea(width, height) {
  // 중첩 함수
  //   function another() {
  //     console.log("another");
  //   }
  //   another();

  let area = width * height;
  return area; // 반환값 (= 함수 호출의 결과값)
  // return 이후 코드 실행 X, 값을 반환하고 함수 종료
}

// 함수 호출 (인수)
let area1 = getArea(10, 20);
console.log(area1);
let area2 = getArea(30, 20);
console.log(area2);

// ----------------------------------------------------------------------------------------------------------

// 호이스팅
// -> 끌어올리다 라는 뜻
// -> 코드의 아래에 작성된 선언문들을 해당 코드를 실행하기 전에 최상단으로 끌어올려서 실행시켜주는 기능
// -> 선언문을 호출문보다 아래에 작성하여도 내부적으로 알아서 호이스팅되어 끌어올려져서 실행되기 때문에 문제 없이 동작

// 함수 호출
// let area1 = getArea(10, 20);

// 함수 선언
// function getArea(width, height) {
//   let area = width * height;
//   return area;
// }
