import React, { useRef } from 'react';

function No5() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const genderRef = useRef(null);
  const ageRef = useRef(null);
  const telRef = useRef(null);
  const schoolRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const gender = genderRef.current.value;
    console.log(gender);
    if (gender === 'Pria' || gender === 'Wanita' ? false : true) {
      console.log(genderRef.current.value === 'Wanita');
      alert('Format pada jenis kelamin salah, "Pria" atau "Wanita" ');
      return;
    }

    console.log(genderRef.current.value);
    alert('Data berhasil dikirim');
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        className="inp5"
        ref={nameRef}
        type="text"
        required
        placeholder="Nama"
        minLength="5"
      />
      <input
        className="inp5"
        ref={emailRef}
        type="email"
        required
        placeholder="Email"
      />
      <input
        className="inp5"
        ref={genderRef}
        type="text"
        required
        placeholder="Jenis Kelamin"
      />
      <input
        className="inp5"
        ref={ageRef}
        type="number"
        required
        placeholder="Umur"
        min="10"
        max="100"
      />
      <input
        className="inp5"
        ref={telRef}
        type="tel"
        required
        placeholder="No Telepon"
        minLength="9"
        maxLength="14"
      />
      <input
        className="inp5"
        ref={schoolRef}
        type="text"
        placeholder="Pendidikan"
        minLength="5"
      />
      <button type="submit" className="submit5">
        Submit
      </button>
    </form>
  );
}

export default No5;
