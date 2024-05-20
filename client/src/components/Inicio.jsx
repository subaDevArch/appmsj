import React from "react";
import TaskPage from "../pages/TasksPage";

function Inicio() {
  return (
    <div className="m-4">
      <hr className="my-4" />
      <div className="text-center">
        <p className="text-lg">¡Bienvenido a PRECEPTOR 2.00!</p>
        <p className="text-gray-700">
          Simplifica tu gestión educativa y comunícate eficazmente con alumnos y
          colegas. Descubre cómo podemos hacer tu trabajo más fácil y
          gratificante. ¡Comienza ahora y lleva tu gestión escolar al siguiente
          nivel!
        </p>
      </div>
      <hr className="my-4" />
      <div className="my-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Noticias Preceptoria
        </h2>
        <hr className="my-4" />
        <div>
          <TaskPage />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Aquí puedes colocar los elementos destacados */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2"></h3>
            <img
              src="/becas.png"
              alt="Descripción de la imagen"
              className="mb-4 rounded-xl"
            />
            <p className="text-gray-700">
              Más de mil estudiantes recibirán el apoyo de la UNSJ. Deberán
              firmar el acta de compromiso y control de la cuenta bancaria en la
              Dirección de Servicio Social.{" "}
            </p>
            <a
              href="https://drive.google.com/file/d/1zpDsl1-kBHkhnDA--N0-1QeRJ3jGGKo1/view"
              className="text-blue-500"
            >
              Link a la lista{" "}
            </a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2"></h3>
            <img
              src="/asueto.jpg"
              alt="Descripción de la imagen"
              className="mb-4 rounded-xl"
            />
            <p className="text-gray-700"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
