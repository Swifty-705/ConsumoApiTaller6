import React, { useState } from 'react';

const PlayerFormEdit = () => {
  const [player, setPlayer] = useState({
    id: '',
    name: '',
    number: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPlayer({ ...player, [name]: value });
  };

  const handleUpdatePlayer = async (event) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:4000/api/players/${player.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(player)
    });
    if (response.ok) {
      console.log('Jugador Actualizado correctamente!');
    } else {
      console.error('Fallo al actualizar.');
    }
  };

  return (
    <form onSubmit={handleUpdatePlayer}>
      <div className="form-group">
        <label htmlFor="id">ID:</label>
        <input
          type="text"
          className="form-control"
          id="id"
          name="id"
          value={player.id}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={player.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="number">Numero:</label>
        <input
          type="text"
          className="form-control"
          id="number"
          name="number"
          value={player.number}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn text-light" style={{backgroundColor: "#B20B0B", marginTop: "4px"}}>
        Actualizar
      </button>
    </form>
  );
};
export default PlayerFormEdit;
