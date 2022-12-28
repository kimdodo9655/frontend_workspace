// [문서 객체에 이벤트를 적용하는 방법]
// 요소선택.이벤트종류 = function(){실행할문장};

// btn.onclick = function(){...}

// or

// btn.onclick = process;
// function process(){...}

let chk = true;
let btn = document.getElementsByTagName('button')[0];
btn.onclick = process;

function process() {
  let divNode = document.querySelector('div');

  if (chk) {
    divNode.style.backgroundColor = 'pink';
    chk = false;
  } else {
    divNode.style.backgroundColor = '#999999';
    chk = true;
  }
}
