import React from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

function EnviarComunicado() {
  return (
    <>
      <Link to="/buscar-por-curso" className="flex flex-col items-center">
        <div className="bg-white hover:bg-gray-300 text-blue-500 font-bold py-8 px-8 rounded-xl shadow-md flex items-center justify-center">
          <Mail className="w-9 h-9" />
        </div>
        <span className="text-xs mt-2">Comunicar por Curso</span>
      </Link>
      <Link to="/buscar-alumnos" className="flex flex-col items-center">
        <div className="bg-white hover:bg-gray-300 text-blue-500 font-bold py-8 px-8 rounded-xl shadow-md flex items-center justify-center">
          <Mail className="w-9 h-9" />
        </div>
        <span className="text-xs mt-2">Comunicar por Alumno</span>
      </Link>
    </>
  );
}

export default EnviarComunicado;
