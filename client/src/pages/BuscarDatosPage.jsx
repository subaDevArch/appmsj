import React from 'react'
import TablaDatosAlumnos from '../components/TablaDatosAlumnos'

function BuscarDatosPage() {
  return (
    <div className="h-screen mb-16">
       <div className="flex flex-col items-center justify-center bg-gradient-to-r from-green-700 to-gray-600 rounded-2xl rounded-t-none shadow-xl shadow-gray-400 p-3 text-center">
  <h1 className=" text-white text-2xl font-bold font-orbitron mb-1">Datos ALumnos</h1> {/* Añadido un margen inferior */}
  {isAuthenticated && user && (
    <p className="text-white text-sm">Bienvenido, {user.username}!</p>
  )}
</div>
      <div><TablaDatosAlumnos/></div>
    </div>
    
  )
}

export default BuscarDatosPage