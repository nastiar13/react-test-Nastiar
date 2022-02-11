import React, { useRef, useState } from 'react';

function No4() {
  const input = useRef(null);
  const select = useRef(null);
  const [counter, setCounter] = useState([]);
  const [dir, setDir] = useState('column');
  let [pattern, setPattern] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    const degree = select.current.value;
    let counter = Array.from(Array(parseInt(input.current.value)).keys());
    if (degree === '45') {
      setDir('column');
      setPattern(
        counter.map((item, i) => {
          let a = '*  '.repeat(i + 1);
          return <p style={{ width: '30rem', textAlign: 'start' }}>{a}</p>;
        }),
      );
    } else if (degree === '135') {
      setDir('column-reverse');
      setPattern(
        counter.map((item, i) => {
          let a = '*  '.repeat(i + 1);
          return <p style={{ width: '30rem', textAlign: 'start' }}>{a}</p>;
        }),
      );
    } else if (degree === '225') {
      setDir('column-reverse');
      setPattern(
        counter.map((item, i) => {
          let a = '*  '.repeat(i + 1);
          return <p style={{ width: '30rem', textAlign: 'end' }}>{a}</p>;
        }),
      );
    } else if (degree === '315') {
      setDir('column');
      setPattern(
        counter.map((item, i) => {
          let a = '*  '.repeat(i + 1);
          return <p style={{ width: '30rem', textAlign: 'end' }}>{a}</p>;
        }),
      );
    }
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input ref={input} type="number" min="3" max="14" />
      <select ref={select}>
        <option value="45">45 deg</option>
        <option value="135">135 deg</option>
        <option value="225">225 deg</option>
        <option value="315">315 deg</option>
      </select>
      <button type="submit">Submit</button>
      <div
        style={{
          display: 'flex',
          flexDirection: dir,
        }}
      >
        {pattern}
      </div>
    </form>
  );
}

export default No4;
