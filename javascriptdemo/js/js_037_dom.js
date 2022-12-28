let pNode = document.getElementById('wrap');
console.log(`${pNode.nodeType} ${pNode.nodeName} ${pNode.nodeValue}`); // 1 P null

// 속성
let pAttr = pNode.attributes;
console.log(pAttr); // NamedNodeMap {0: id, 1: class, id: id, class: class, length: 2}
// title 추가 후 : NamedNodeMap {0: id, 1: class, 2: title, id: id, class: class, title: title, length: 3}
console.log(pAttr[0]); // id='wrap'
console.log(pAttr.id); // id='wrap'
console.log(pAttr['id']); // id='wrap'
console.log(pAttr.length); // 2
console.log(pAttr['length']); // 2
console.log(pAttr.class); // class='chk'
console.log(pAttr['class']); // class='chk'
console.log(pNode.getAttribute('class')); // chk (권장)
console.log(pNode.class); // undefined
console.log(pNode.getAttribute('id')); // wrap (권장)
console.log(pNode.id); // wrap

console.log(`${pAttr[0].nodeType} ${pAttr[0].nodeName} ${pAttr[0].nodeValue}`); // 2 id wrap

let textNode = pNode.firstChild;
console.log(textNode); // "content" #text
console.log(`${textNode.nodeType} ${textNode.nodeName} ${textNode.nodeValue}`); // 3 #text content

// innerText, innerHTML : 요소의 컨텐츠
let bodyNode = document.getElementsByTagName('body')[0];

// content
console.log(bodyNode.innerText); // content : body에 있는 모든 컨텐츠 출력
console.log(bodyNode.innerHTML); // body에 있는 모든 코드
/* <p id="wrap" class="chk" title="ko">content</p>
<input type="text" id="fname" name="fname" value="홍길동"> */

// bodyNode.innerText = '<p>append</p>';
// bodyNode.innerHTML = '<p>append</p>';

// value
let fname = document.querySelector('#fname');
console.log(fname.value); // 홍길동
fname.value = '고수';
console.log(fname.value); // 고수
