import React, { useState } from 'react';

function No3B() {
  const [inpList, setInpList] = useState(['1', '2', '3']);
  return (
    <div>
      <div>
        {inpList.map((item) => {
          return <input type="number" name="" id="" />;
        })}
      </div>

      <div>
        <button c style={{ display: 'block', padding: '1rem' }}>
          Tambah Field
        </button>
        <button className="btn">+</button>
        <button className="btn">-</button>
        <button className="btn">x</button>
        <button className="btn">/</button>
      </div>
      <div class="total"></div>
    </div>
  );
}

export default No3B;
