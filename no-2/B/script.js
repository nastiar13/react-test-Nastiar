const input = document.querySelector('#input');
const month = document.querySelector('#month');
const button = document.querySelector('#button');
const div = document.querySelector('.list');

button.addEventListener('click', (e) => {
  let inpVal = parseInt(input.value);
  let monVal = parseInt(month.value);
  let list = '';
  if (inpVal < 100000) {
    alert('jumlah minimal input adalah 100.000');
    div.innerHTML = '';
    return;
  } else if (inpVal < 500000) {
    let tempValue = inpVal + inpVal * (2 / 100) - 1500;
    for (let i = 1; i <= monVal; i++) {
      list += `<p>Bulan ke ${i} :     Rp. ${tempValue}</p>`;
      tempValue = tempValue + tempValue * (2 / 100) - 1500;
    }
  } else if (inpVal < 10000000) {
    let tempValue = inpVal + inpVal * (3 / 100) - 2000;
    for (let i = 1; i <= monVal; i++) {
      list += `<p>Bulan ke ${i} :     Rp. ${tempValue}</p>`;
      tempValue = tempValue + tempValue * (3 / 100) - 2000;
    }
  } else if (inpVal < 50000000) {
    let tempValue = inpVal + inpVal * (4 / 100) - 2500;
    for (let i = 1; i <= monVal; i++) {
      list += `<p>Bulan ke ${i} :     Rp. ${tempValue}</p>`;
      tempValue = tempValue + tempValue * (4 / 100) - 2500;
    }
  } else if (inpVal >= 50000000) {
    let tempValue = inpVal + inpVal * (5 / 100) - 3000;
    for (let i = 1; i <= monVal; i++) {
      list += `<p>Bulan ke ${i} :     Rp. ${tempValue}</p>`;
      tempValue = tempValue + tempValue * (5 / 100) - 3000;
    }
  }
  div.innerHTML = list;
});
