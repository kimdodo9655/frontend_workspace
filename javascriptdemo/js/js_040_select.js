document.frm.onsubmit = () => {
  let optFruit = document.querySelector('#sel');
  console.log(optFruit);

  let optSelect = optFruit.selectedIndex;
  console.log(`선택 : ${optSelect}`);

  return false;
};
