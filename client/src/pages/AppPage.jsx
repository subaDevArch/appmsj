import React from "react";
import Aplicaciones from "../components/Aplicaciones";
import { useAuth } from "../context/AuthContext";

function AppPage() {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="h-screen"> {/* Aquí se aplica height: 100vh */}
      <div className="flex justify-between items-center px-4 py-2">
        <h1 className="text-2xl font-bold">Apps</h1>
        {isAuthenticated && user && (
          <p className="text-gray-600 text-sm">Welcome, {user.username}!</p>
        )}
      </div>
      <div className="px-3 py-3 grid grid-cols-3 gap-4 mb-10">
        <Aplicaciones />
      </div>
    </div>
  );
}

export default AppPage;

