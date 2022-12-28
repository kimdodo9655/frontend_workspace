let arr = [1, 2, 3, undefined, 4, undefined, undefined, 5];

let result = arr.filter((element) => {
  return element;
});

let sum = result.reduce((total, element) => {
  return total + element;
});

console.log(`합계: ${sum}`);
console.log(`평균: ${sum / result.length}`);

// -------------------------------------------------
let list = [
  ['홍길동', 90, 85, 40],
  ['이영희', 100, 35, 75],
];

let maxNum = 0;

/*
for (let i = 0; i < list.length; i++) {
  list[i].push(list[i][1] + list[i][2] + list[i][3]);
  list[i].push((list[i][4] / 3).toFixed(2));
  if (maxNum < list[i][5]) maxNum = list[i][5];
}
*/

for (let i = 0; i < list.length; i++) {
  let [fullName, ...jumsu] = list[i];
  let hap = jumsu.reduce((total, currentVal) => {
    return total + currentVal;
  });
  list[i].push(hap);
  list[i].push((hap / jumsu.length).toFixed(2));
}

let maxJumsu = list.map((element) => {
  // return element[element.length - 1];
  return element.slice(-1);
});

console.log(list);
console.log(`최고점 : ${maxNum}`);
console.log(`최고점 : ${Math.max(...maxJumsu)}`);

//js033_Date.js

let date = new Date();
//2022-09-26T01:11:01.481Z
console.log(date);

console.log(date.getFullYear()); //2022
console.log(date.getMonth() + 1); // 9, 0부터 시작하기 때문에 +1을 해줘야 한다.
console.log(date.getDate()); // 26
console.log(date.getDay()); //1, 요일 0일요일 6토요일
