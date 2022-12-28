//js042_checkbox.js

//약관동의
document.frm.onsubmit = () => {
  let admin = document.frm.admin;
  if (!admin.checked) alert('--- 약관에 동의해 주세요 ---');
  return false;
};

//전체선택
document.frm.allCheck.onclick = function () {
  console.log(this.checked);
  // this : <input type="checkbox" name="allCheck" id="allCheck">
  // () => {} 화살표 함수일 경우 : document, window

  /*
  document.frm.subject1.checked = this.checked;
  document.frm.subject2.checked = this.checked;
  document.frm.subject3.checked = this.checked;
*/
  let checkgroup = document.querySelectorAll('.checkgroup');
  console.log(checkgroup.length);

  /*
  for (let element of checkgroup) {
    element.checked = this.checked;
  }
  */

  // checkgroup.checked = this.checked;

  // ES6 Spread Operator : NodeList를 Array로 바꿔줌
  let myThis = this;
  let iArray = [...checkgroup];

  iArray.map(function (element) {
    element.checked = myThis.checked;
  });
};
