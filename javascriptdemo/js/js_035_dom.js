let hNode = document.getElementById('selector');
console.log(hNode);
console.log(hNode, typeof hNode);

let hId = document.querySelector('#selector');
console.log(hId, typeof hId);

let hClass = document.querySelector('.choice');
// alert(hClass);
console.log(hClass, typeof hClass);

// js html dom (3/12 1element 2attr 3text / node)

let pNode = document.getElementsByTagName('p');
console.log(pNode, typeof pNode);
console.log(pNode.length); // 4
console.log(pNode[0]);
console.log(pNode.item(0));
console.log(pNode[0].innerText);
pNode[0].style.backgroundcolor = 'yellow';

function process() {
  let fname = document.frm.fname;
  alert('dd');
  console.log('fname : ', fname);
  console.log(fname.value);
  console.log(fname.defaultValue);
  return false;
}
