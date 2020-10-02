import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {

  // State del formulario
  const proyectosContext = useContext(proyectoContext);
  const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

  // State del proyecto
  const [ proyecto, guardarProyecto ] = useState({
    nombre: ""
  });

  // Extraer datos proyecto
  const { nombre } = proyecto;

  const onChangeProyecto = e =>{
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value
    });
  };

  // Cuando el usuario envia el proyecto
  const onSubmitProyecto = e =>{
    e.preventDefault();

    // Validar proyecto
    if(nombre.trim() === ""){
      mostrarError();
      return;
    }

    // Agregar al state
    agregarProyecto(proyecto);

    // Reiniciar el form
    guardarProyecto({
      nombre: ""
    });


  }

    return (
      <Fragment>
        <button 
          type="button" 
          className="btn btn-block btn-primario"
          onClick={e => mostrarFormulario()}
        >
          Nuevo Proyecto
        </button>

        {
          formulario ?
          (
            <form 
              className="formulario-nuevo-proyecto"
              onSubmit={onSubmitProyecto}
            >
              <input
                type="text"
                className="input-text"
                placeholder="Nombre Proyecto"
                name="nombre"
                value={nombre}
                onChange={onChangeProyecto}
              />

              <input
                type="submit"
                className="btn btn-primario btn-block"
                value="Agregar Proyecto"
              />
            </form>
          ) : null }

          { errorformulario ? <p className="mensaje error">El nombre del Proyecto es obligatorio</p> : null }

        
      </Fragment>
    );
}
 
export default NuevoProyecto;