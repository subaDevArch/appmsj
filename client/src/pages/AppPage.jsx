import React from "react";
import Aplicaciones from "../components/Aplicaciones";
import { useAuth } from "../context/AuthContext";

function AppPage() {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="h-screen"> {/* Aquí se aplica height: 100vh */}
     <div className="flex flex-col items-center justify-center bg-gradient-to-r from-green-700 to-gray-600 rounded-2xl rounded-t-none shadow-xl shadow-gray-400 p-3 text-center">
  <h1 className=" text-white text-2xl font-bold font-orbitron mb-1">Apps</h1> {/* Añadido un margen inferior */}
  {isAuthenticated && user && (
    <p className="text-white text-sm">Bienvenido, {user.username}!</p>
  )}
</div>
      <div className="px-3 py-3 grid grid-cols-3 gap-4 mb-10">
        <Aplicaciones />
      </div>
    </div>
  );
}

export default AppPage;

