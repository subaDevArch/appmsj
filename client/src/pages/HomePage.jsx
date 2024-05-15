import React from "react";
import { Link } from "react-router-dom";
import Inicio from "../components/Inicio";

function HomePage() {
  return (
    <div className="h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-2 ml-4">Home</h1>

      <div>
        <Inicio />
      </div>
    </div>
  );
}

export default HomePage;
