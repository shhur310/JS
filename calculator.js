// calculator.js

const prompt = require("prompt-sync")();

// 숫자 입력
const num1 = Number(prompt("첫 번째 숫자를 입력하세요: "));
const operator = prompt("연산자를 입력하세요 (+, -, *, /): ");
const num2 = Number(prompt("두 번째 숫자를 입력하세요: "));

let result;

// 조건문으로 연산 처리
if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  if (num2 === 0) {
    console.log("0으로 나눌 수 없습니다.");
  } else {
    result = num1 / num2;
  }
} else {
  console.log("올바른 연산자를 입력하세요.");
}

// 결과 출력
if (result !== undefined) {
  console.log(`결과: ${num1} ${operator} ${num2} = ${result}`);
}