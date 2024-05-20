import React from "react";
import { Link } from "react-router-dom";
import Inicio from "../components/Inicio";
import TaskPage from "./TasksPage";
import { useAuth } from "../context/AuthContext";
function HomePage() {
  const { isAuthenticated, user } = useAuth();
  return (
    <div className="h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-green-700 to-gray-600 rounded-2xl rounded-t-none shadow-xl shadow-gray-400 p-3 text-center">
  <h1 className=" text-white text-2xl font-bold font-orbitron mb-1">PRECEPTOR</h1> {/* Añadido un margen inferior */}
  {isAuthenticated && user && (
    <p className="text-white text-sm">Bienvenido, {user.username}!</p>
  )}
</div>

      <div>
        <Inicio />
      </div>
    </div>
  );
}

export default HomePage;
