import React from "react";
import { Link } from "react-router-dom";
import EnviarComunicado from "../components/EnviarComunicado";
import { useAuth } from "../context/AuthContext";

function EnviarComunicadoPage() {
  const { isAuthenticated, user } = useAuth();
  return (
    <div className="h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-green-700 to-gray-600 rounded-2xl rounded-t-none shadow-xl shadow-gray-400 p-3 text-center">
  <h1 className=" text-white text-2xl font-bold font-orbitron mb-1">Enviar Comunicado</h1> {/* Añadido un margen inferior */}
  {isAuthenticated && user && (
    <p className="text-white text-sm">Bienvenido, {user.username}!</p>
  )}
</div>
      <div className="px-3 py-3 grid grid-cols-3 gap-4">
        <EnviarComunicado />
      </div>
    </div>
  );
}

export default EnviarComunicadoPage;
