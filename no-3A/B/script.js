let input = document.querySelectorAll('#input');
let checkbox = document.querySelectorAll('.checkbox');
const btn = document.querySelectorAll('.btn');
let remove = document.querySelectorAll('.delete');
const total = document.querySelector('.total');
const inputList = document.querySelector('.input-list');
let inputItem = document.querySelectorAll('.input-item');

const add = document.querySelector('.add-field');
let i = 0;
let val;
let inpArr = '';
let arr = [];
function getValue() {
  arr = [];
  checkbox.forEach((item, i) => {
    if (item.checked) {
      arr.push(input[i].value);
    }
  });
}
function renderInputList() {
  inputList.innerHTML = inputItem.map((item, i) => item);
}
getValue();
btn.forEach((item, i) => {
  item.addEventListener('click', () => {
    getValue();
    let tempVal = '';
    if (arr.length < 2) {
      alert('minimal 2 input harus di isi dan dicentang');
      return;
    }
    if (item.innerHTML == '+') {
      val = eval(arr.join('+'));
      tempVal = `hasil: kalkulasi ${item.innerHTML} = ${val}`;
    } else if (item.innerHTML == '-') {
      val = eval(arr.join('-'));
      tempVal = `hasil: kalkulasi ${item.innerHTML} = ${val}`;
    } else if (item.innerHTML == 'x') {
      val = eval(arr.join('*'));
      tempVal = `hasil: kalkulasi ${item.innerHTML} = ${val}`;
    } else if (item.innerHTML == '/') {
      let isZero = arr.find((item) => item == '0');
      if (isZero) {
        alert('tidak boleh ada angka 0 di pembagian');
        return;
      }
      val = eval(arr.join('/'));
      tempVal = `hasil: kalkulasi ${item.innerHTML} = ${val}`;
    }
    total.innerHTML = tempVal;
  });
});
function deleteList(i) {
  inputItem[0].remove();
  renderInputList();
  getValue();
}
add.addEventListener('click', () => {
  inputItem = document.querySelectorAll('.input-item');
  console.log(inputItem.length);
  inputList.innerHTML += `
  <div class="input-item">
    <input id="input" type="number" />
    <input type="checkbox" class="checkbox" />
    <button onClick="deleteList()" class="delete">Delete</button>
  <div />
  `;
  inputItem = document.querySelectorAll('.input-item');
  input = document.querySelectorAll('#input');
  checkbox = document.querySelectorAll('.checkbox');
  remove = document.querySelectorAll('.delete');
  renderInputList();
});
