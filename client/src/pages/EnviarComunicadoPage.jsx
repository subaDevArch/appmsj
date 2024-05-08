import React from "react";
import { Link } from "react-router-dom";
import EnviarComunicado from "../components/EnviarComunicado";

function EnviarComunicadoPage() {
  return (
    <div className="h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Enviar Comunicado</h1>
      <div className="px-3 py-3 grid grid-cols-3 gap-4">
        <EnviarComunicado />
      </div>
    </div>
  );
}

export default EnviarComunicadoPage;
