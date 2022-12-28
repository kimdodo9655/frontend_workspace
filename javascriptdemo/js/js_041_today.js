let dateBtnNode = document.querySelector('button');

dateBtnNode.onclick = () => {
  let pNode = document.querySelector('p');
  let today = new Date();
  /*
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let hour = today.getHours();
  let minite = today.getMinutes();
  let second = today.getSeconds();
*/

  let year = String(today.getFullYear()).padStart(2, '0');
  let month = String(today.getMonth() + 1).padStart(2, '0');
  let date = String(today.getDate()).padStart(2, '0');
  let hour = String(today.getHours()).padStart(2, '0');
  let minite = String(today.getMinutes()).padStart(2, '0');
  let second = String(today.getSeconds()).padStart(2, '0');

  /*
  if (hour > 12) {
    hour -= 12;
  }
*/
  // String().padStart(2, "0");

  pNode.innerText = `${year}-${month}-${date} ${hour}:${minite}:${second}`;
};

// let arr = [1,2,3];
// let obj = {'a': 1, 'b': 2};
