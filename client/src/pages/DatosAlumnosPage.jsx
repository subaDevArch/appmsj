import React from "react";
import DatosAlumnos from "../components/DatosAlumnos";

function DatosAlumnosPage() {
  return (
    <div className="h-screen">
       <div className="flex flex-col items-center justify-center bg-gradient-to-r from-green-700 to-gray-600 rounded-2xl rounded-t-none shadow-xl shadow-gray-400 p-3 text-center">
  <h1 className=" text-white text-2xl font-bold font-orbitron mb-1">Datos Alumnos</h1> {/* Añadido un margen inferior */}
  {isAuthenticated && user && (
    <p className="text-white text-sm">Bienvenido, {user.username}!</p>
  )}
</div>
      <DatosAlumnos />
    </div>
  );
}

export default DatosAlumnosPage;
