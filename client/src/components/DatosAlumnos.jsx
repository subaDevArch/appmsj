import React from "react";
import { useLocation } from "react-router-dom";

const DetallesAlumnos = () => {
  const location = useLocation();
  const selectedAlumnos = location.state ? location.state.selectedAlumnos : [];

  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">
        Datos de los alumnos seleccionados
      </h2>
      {selectedAlumnos.length > 0 ? (
        <div>
          {selectedAlumnos.map((alumno, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Alumno {index + 1}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">Nombre y Apellido:</label>
                  <input
                    type="text"
                    value={alumno["Nombre y Apellido del Alumno:"]}
                    readOnly
                    className="border border-gray-300 rounded px-4 py-2 w-full"
                  />
                </div>
                <div>
                  <label className="block mb-1">Curso:</label>
                  <input
                    type="text"
                    value={alumno["Curso al que asiste:"]}
                    readOnly
                    className="border border-gray-300 rounded px-4 py-2 w-full"
                  />
                </div>
                <div>
                  <label className="block mb-1">Email Alumno:</label>
                  <input
                    type="text"
                    value={alumno["Email Alumno:"]}
                    readOnly
                    className="border border-gray-300 rounded px-4 py-2 w-full"
                  />
                </div>
                <div>
                  <label className="block mb-1">Celular Alumno:</label>
                  <input
                    type="text"
                    value={alumno["Número de Celular Alumno:"]}
                    readOnly
                    className="border border-gray-300 rounded px-4 py-2 w-full"
                  />
                </div>
                <div>
                  <label className="block mb-1">Madre o Tutor:</label>
                  <input
                    type="text"
                    value={alumno["Nombre y Apellido Madre o Tutor:"]}
                    readOnly
                    className="border border-gray-300 rounded px-4 py-2 w-full"
                  />
                </div>
                <div>
                  <label className="block mb-1">Email Madre o Tutor:</label>
                  <input
                    type="text"
                    value={alumno["Email Madre o Tutor:"]}
                    readOnly
                    className="border border-gray-300 rounded px-4 py-2 w-full"
                  />
                </div>
                <div>
                  <label className="block mb-1">Celular Madre o Tutor:</label>
                  <input
                    type="text"
                    value={alumno["Número de Celular Madre o Tutor:"]}
                    readOnly
                    className="border border-gray-300 rounded px-4 py-2 w-full"
                  />
                </div>
                <div>
                  <label className="block mb-1">Padre o Tutor:</label>
                  <input
                    type="text"
                    value={alumno["Nombre y Apellido Padre o Tutor:"]}
                    readOnly
                    className="border border-gray-300 rounded px-4 py-2 w-full"
                  />
                </div>
                <div>
                  <label className="block mb-1">Email Padre o Tutor:</label>
                  <input
                    type="text"
                    value={alumno["Email Padre o Tutor:"]}
                    readOnly
                    className="border border-gray-300 rounded px-4 py-2 w-full"
                  />
                </div>
                <div>
                  <label className="block mb-1">Celular Padre o Tutor:</label>
                  <input
                    type="text"
                    value={alumno["Número de Celular Padre o Tutor:"]}
                    readOnly
                    className="border border-gray-300 rounded px-4 py-2 w-full"
                  />
                </div>
                <div>
                  <label className="block mb-1">Domicilio del Alumno:</label>
                  <input
                    type="text"
                    value={alumno["Domicilio del Alumno:"]}
                    readOnly
                    className="border border-gray-300 rounded px-4 py-2 w-full"
                  />
                </div>
                <div>
                  <label className="block mb-1">Observaciones:</label>
                  <textarea
                    rows="3"
                    value={alumno["Observaciones sobre el alumno:"]}
                    readOnly
                    className="border border-gray-300 rounded px-4 py-2 w-full"
                  />
                </div>
              </div>
              {index !== selectedAlumnos.length - 1 && <hr className="my-4" />} {/* Añade hr excepto para el último alumno */}
            </div>
          ))}
        </div>
      ) : (
        <p>No se han seleccionado alumnos.</p>
      )}
    </div>
  );
};

export default DetallesAlumnos;
