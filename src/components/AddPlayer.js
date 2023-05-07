import React, { useState } from 'react';

const AddPlayerForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPlayer = { name, number };

    fetch('http://localhost:4000/api/players', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlayer),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          className="form-control"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="number">Numero:</label>
        <input
          type="text"
          id="number"
          className="form-control"
          name="number"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
      </div>
      <button type="submit" className='btn text-light' style={{backgroundColor: "#B20B0B", marginTop: "5px"} }>Añadir</button>
    </form>
  );
};

export default AddPlayerForm;
