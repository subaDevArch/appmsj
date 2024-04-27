import React from 'react'
import {Link} from "react-router-dom"
import {Mail} from 'lucide-react'

function EnviarComunicado() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Enviar Comunicado</h1>
      <div className="flex space-x-4">
        <Link to="/buscar-por-curso">
        <div className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-8 px-8 rounded-xl shadow-md flex items-center justify-center">
    <Mail className="w-9 h-9" />
  </div>
  <span className="text-xs mt-2">Comunicar por Curso</span>
        </Link>
        <Link to="/buscar-alumnos">
        <div className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-8 px-8 rounded-xl shadow-md flex items-center justify-center">
    <Mail className="w-9 h-9" />
  </div>
  <span className="text-xs mt-2">Comunicar por Alumno</span>
        </Link>
      </div>
    </div>
  )
}

export default EnviarComunicado