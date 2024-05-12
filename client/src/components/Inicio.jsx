import React from "react";

function Inicio() {
  return (
    <div className="m-4">
      <div className="flex justify-center bg-gradient-to-r from-green-700 to-gray-600 rounded-md shadow-xl shadow-gray-400">
        <h1 className="font-orbitron text-white text-3xl self-center m-4">
          PRECEPTOR 2.00
        </h1>
      </div>
      <hr className="my-4" />
      <div className="text-center">
        <p className="text-lg">¡Bienvenido a PRECEPTOR 2.00!</p>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante venenatis dapibus posuere velit aliquet.
        </p>
      </div>
      <hr className="my-4" />
      <div className="my-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Noticias Preceptoria
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Aquí puedes colocar los elementos destacados */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">
             
            </h3>
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
            <h3 className="text-lg font-semibold mb-2">Destacado 2</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Destacado 3</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Destacado 2</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Destacado 3</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Destacado 2</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Destacado 3</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
