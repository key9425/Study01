// 단락 평가
// - 논리 연산식(AND, OR)에서 첫번째 피연산자의 값만으로도 연산의 결과를 확정할 수 있다면, 두 번째 피연산자의 값에는 접근하지 않는 특징
// - 불리언(True, False) 값 뿐만 아니라 Truthy, Falsy 한 값도 사용 가능 -> 연산의 결과가 값 자체가 된다

//----------------------------------------------------------------------------------------------------
// (조건문을 이용하지 않고) 특정 조건에 맞춰서 함수를 호출하지 않도록 방지할 수 있는 기능

function returnFalse() {
  console.log("False 함수");
  // return false;
  return undefined;
}

function returnTrue() {
  console.log("True 함수");
  // return true;
  return 10;
}

console.log(returnFalse() && returnTrue());
console.log(returnTrue() || returnFalse());

//----------------------------------------------------------------------------------------------------
// 단락 평가 활용 사례

function printName(person) {
  // console.log(person && person.name);
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "이정환" });
