import React from "react";

const DeletePlayerForm = ({ onDelete }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const playerId = event.target.elements.playerId.value;
    fetch(`http://localhost:4000/api/players/${playerId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        onDelete(playerId);
      })
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="playerIdInput">ID:</label>
        <input
          type="number"
          className="form-control"
          id="playerIdInput"
          placeholder="ID del Jugador"
          name="playerId"
        />
      </div>
      <button type="submit" className="btn text-light" style={{backgroundColor: "#B20B0B", marginTop: "4px"}}>
        Eliminar
      </button>
    </form>
  );
};

export default DeletePlayerForm;
