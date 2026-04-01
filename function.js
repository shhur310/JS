// 함수(Function) -> 코드를 재사용하기 위해 만들어놓은 구조
// 함수 정의 -> "~ 기능을 하는 코드 덩어리"를 X라는 이름 부르겠다
// 입력 -> 함수 동작 -> 출력
function add(n1, n2) {
    let result = n1 + n2;
    // 함수를 호출한 곳으로 함수의 실행 결과를 돌려준다.
    return result;
}

// 함수 호출(call) -> 함수를 사용한다
let result = add(1, 2);
console.log(result);
