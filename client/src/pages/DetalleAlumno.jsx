// DetalleAlumno.jsx

import React from "react";

const DetalleAlumno = ({ location }) => {
  const { state } = location;
  const alumnoData = state ? state.data : null;

  return (
    <div>
      <h2>Detalles del Alumno</h2>
      {alumnoData && (
        <div>
          <div>
            <label>Nombre y Apellido:</label>
            <input type="text" value={alumnoData["Nombre y Apellido del Alumno:"]} readOnly />
          </div>
          <div>
            <label>Curso al que asiste:</label>
            <input type="text" value={alumnoData["Curso al que asiste:"]} readOnly />
          </div>
          <div>
            <label>Email Alumno:</label>
            <input type="text" value={alumnoData["Email Alumno:"]} readOnly />
          </div>
          {/* Agrega más campos según la estructura de datos que estás recibiendo */}
        </div>
      )}
    </div>
  );
};

export default DetalleAlumno;
