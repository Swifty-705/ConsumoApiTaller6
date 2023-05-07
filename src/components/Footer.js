import React from "react";


const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row p-5 pb-2 text-white" style={{backgroundColor: "#B20B0B"}}>
        <div className="col-xs-12 cold-md-6 col-lg-3">
          <p className="h3">Uniminuto</p>
          <i className="text-secundary">Ingenieria Web 2</i>
        </div>

        <div className="col-xs-12 cold-md-6 col-lg-3">
          <p className="h5 mb-3">Taller 6</p>
          <div className="mb-2">
            <span className="material-icons">feed</span>
            <i className="text-decoration-none">
              Construyendo y enlazando APIs
            </i>
          </div>
          <div className="mb-2">
            <span className="material-icons">diversity_3</span>
            <i className="text-decoration-none"> Grupo 7</i>
          </div>
          <div className="mb-2">
            <span className="material-icons">cast_for_education</span>
            <i className="text-decoration-none">
               Profesor Jose Danilo Sanchez Torres
            </i>
          </div>
        </div>

        <div className="col-xs-12 cold-md-6 col-lg-3">
          <p className="h5 mb-3">Karen Alejandra Mendez Laverde</p>
          <div className="mb-2">
            <span className="material-icons">person_search</span>
            <i className="text-decoration-none">  ID:742179</i>
          </div>
        </div>

        <div className="col-xs-12 cold-md-6 col-lg-3">
          <p className="h5 mb-3">Andres Santiago Zamudio Hernadnez</p>
          <div className="mb-2">
            <span className="material-icons">person_search</span>
            <i className="text-decoration-none">  ID: 747774</i>
          </div>
        </div>
      </div>
      
    </div>

  );
};

export default Footer;
