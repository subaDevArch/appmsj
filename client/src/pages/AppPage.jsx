import React from "react";
import Aplicaciones from "../components/Aplicaciones";

function AppPage() {
  return (
    <div className="h-screen bg-gray-50 "> {/* Aquí se aplica height: 100vh */}
      <h1 className="text-2xl font-bold mb-2 ml-4">Apps</h1>
      <div className="px-3 py-3 grid grid-cols-3 gap-4">
        <Aplicaciones />
      </div>
    </div>
  );
}

export default AppPage;
