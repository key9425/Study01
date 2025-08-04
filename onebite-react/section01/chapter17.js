// 1. 배열 생성 - 2가지 방식
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용)

// 타입과 길이 제한 없이 순차적으로 값을 저장할 수 있음
let arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []];

// 2. 배열 요소 접근
// - 순서대로 값을 저장하기 때문에 각각의 원소에 인덱스(번호)로 접근 가능
let item1 = arrC[0];
let item2 = arrC[1];

arrC[0] = "hello"; // 수정
