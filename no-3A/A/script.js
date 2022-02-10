const input = document.querySelectorAll('#input');
const checkbox = document.querySelectorAll('.checkbox');
const btn = document.querySelectorAll('.btn');
const total = document.querySelector('.total');
let val;
let arr = [];
function getValue() {
  arr = [];
  checkbox.forEach((item, i) => {
    if (item.checked) {
      arr.push(input[i].value);
    }
  });
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
