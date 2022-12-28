//js035_dom.js
let myNode = document.getElementById('p2');
console.log(myNode);
console.log(`myNode : ${myNode}`); // myNode : [object HTMLParagraphElement]
myNode.style.color = 'blue';

let ptNode = myNode.parentNode;
console.log(ptNode);
console.log(`ptNode : ${ptNode}`); // ptNode : [object HTMLDivElement]
ptNode.style.color = '#999';

// previousSibling
let prevNode = myNode.previousSibling;
console.log(prevNode);
console.log(`prevNode : ${prevNode}`); // prevNode : [object Text]
prevNode = prevNode.previousSibling;
console.log(prevNode); // p#p1
console.log(`prevNode : ${prevNode}`); // prevNode : [object HTMLParagraphElement]

// previousElementSibling : element node만 검색한다.
prevElementNode = myNode.previousElementSibling;
console.log(prevElementNode);
console.log(`prevElementNode : ${prevElementNode}`); // prevElementNode : [object HTMLParagraphElement]

// nextSibling
let nextNode = myNode.nextSibling;
console.log(nextNode);
console.log(`nextNode : ${nextNode}`); // [object Text]
nextNode = nextNode.nextSibling;
console.log(nextNode);
console.log(`nextNode : ${nextNode}`); // nextNode : [object HTMLParagraphElement]

// nextElementSibling : element node만 검색한다.
let nextElementSibling = myNode.nextElementSibling;
console.log(nextElementSibling);
console.log(`nextElementSibling : ${nextElementSibling}`); // nextElementSibling : [object HTMLParagraphElement]

// childNodes
let divNode = document.getElementById('wrap');
console.log(divNode);
console.log(`divNode : ${divNode}`); // divNode : [object HTMLDivElement]

let divChildesNode = divNode.childNodes;
console.log(divChildesNode); // NodeList(9) [text, p#p1, text, p#p2, text, p#p3, text, p#p4, text]
console.log(`divChildesNode : ${divChildesNode}`); // divChildesNode : [object NodeList]

// children
let divChildren = divNode.children;
console.log(divChildren); // HTMLCollection(4) [p#p1, p#p2, p#p3, p#p4, p1: p#p1, p2: p#p2, p3: p#p3, p4: p#p4]
console.log(`divChildren : ${divChildren}`); // divChildren : [object HTMLCollection]

let p4Node = document.querySelector('#p4');
console.log(p4Node); // <p id="p4"><img src="images/gosu.jpg" alt="영화배우"></p>
console.log(`p4Node : ${p4Node}`); // p4Node : [object HTMLParagraphElement]

let aNode = p4Node.firstElementChild;
console.log(aNode); // <img src="images/gosu.jpg" alt="영화배우">
console.log(`aNode : ${aNode}`); // aNode : [object HTMLImageElement]

// 객체.getAttribute('속성명'), 객체.setAttribute('속성명', 값)
// 객체.속성명                  객체.속성명 = 값
let aAttrNode = aNode.getAttribute('src');
console.log(aAttrNode); // images/gosu.jpg

aAttrNode = aNode.src;
console.log(aAttrNode); // file:///C:/Users/dodo/Documents/develop/frontend_workspace/javascriptdemo/images/gosu.jpg

aNode.setAttribute('title', '스타배우');
console.log(aNode.getAttribute('class')); // gosu
console.log(aNode.class); // undefined
console.log(aNode.getAttribute('title')); // 스타배우
console.log(aNode.title); // 스타배우
console.log('-----');
console.log(aNode.id);
console.log(aNode.getAttribute('id'));
aNode.id = 'imgGosu';

console.log(aNode.id);
console.log(aNode.title);

aAttrList = aNode.getAttributeNode;
console.log(aAttrList.length); // 1
console.log(aAttrList); // getAttributeNode() { [native code] }
