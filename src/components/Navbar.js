import React from "react";
import AddPlayerForm from "./AddPlayer";
import PlayerFormEdit from "./editPlayer";
import DeletePlayerForm from "./deletePlayer";
const Navbar = ({ brand }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#B20B0B"}}>
      <div className="container-fluid">
        <a className="navbar-brand text-uppercase" href="/">
          {brand}
        </a>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown" style={{marginRight: "100px"}}>
        <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Añadir
          </a>
          <ul class="dropdown-menu">
            <AddPlayerForm/>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Actualizar
          </a>
          <ul class="dropdown-menu">
            <PlayerFormEdit/>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Eliminar
          </a>
          <ul class="dropdown-menu">
            <DeletePlayerForm/>
          </ul>
        </li>
      </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
