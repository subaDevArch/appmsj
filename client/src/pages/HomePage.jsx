import React from "react";
import { Link } from "react-router-dom";
import Inicio from "../components/Inicio";
import { useAuth } from "../context/AuthContext";
function HomePage() {
  const { isAuthenticated, user } = useAuth();
  return (
    <div className="h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-2 ml-4">Home</h1>
      {isAuthenticated && user && (
          <p className="text-gray-600 text-sm">Bienvenido, {user.username}!</p>
        )}
      <div>
        <Inicio />
      </div>
    </div>
  );
}

export default HomePage;
