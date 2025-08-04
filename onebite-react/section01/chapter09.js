// 1. if 조건문 (if문)
let num = 4;

if (num >= 10) {
  console.log("num은 10 이상입니다");
  console.log("조건이 참입니다!");
} else if (num >= 5) {
  console.log("num은 5 이상입니다");
} else if (num >= 3) {
  console.log("num은 3 이상입니다");
} else {
  console.log("조건이 거짓입니다!");
}

// -----------------------------------------------------

// 2. Switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적인다.
let animal = "c";

switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }
  default: {
    console.log("그런 동물은 전 모릅니다");
  }
}

// -----------------------------------------------------

// if vs switch
// - if : 복잡한 여러 개의 조건을 이용해야 할 경우
// - switch : 변수의 값을 기준으로 조건을 처리할 경우
