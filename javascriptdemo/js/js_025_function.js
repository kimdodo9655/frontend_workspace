// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects

/*
    <프로그램 실행결과>
    주어진 배열에서 3의 배수의 개수 => 6
    주어진 배열에서 3의 배수 합 => 108
*/

let arr = [1, 3, 5, 8, 9, 11, 15, 19, 18, 20, 30, 33, 31];

//주어진 배열에서 어떤 수의 배수를 구해서 리턴해주는 함수를 정의

function process(arr) {
  let data = [];
  for (let element of arr) {
    if (element % 3 == 0) {
      data.push(element);
    }
  }
  return data;
}

console.log(process(arr));

// 3의 배수의 개수
function cnt(process) {
  return process.length;
}

console.log(`3의 배수의 수 : ${cnt(process(arr))}`);

// 3의 배수 합
function plus(process) {
  let sum = 0;
  for (let i = 0; i < process.length; i++) {
    sum += process[i];
  }
  return sum;
}

console.log(`3의 배수의 수 : ${plus(process(arr))}`);

console.log(`주어진 배열에서 3의 배수의 개수=>${process(arr).length}`);

let result = function (val) {
  let sum = 0;
  for (let element of val) {
    sum += element;
  }
  return sum;
};

console.log(`주어진 배열에서 3의 배수의 합=>${result(process(arr))}`);
