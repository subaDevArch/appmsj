import React from "react";
import { Link } from "react-router-dom";
import { Mail, Hotel, Clock11 } from "lucide-react";



function Aplicaciones() {
  return (
    <>
     <Link to="/enviar-comunicado" className="flex flex-col items-center">
  <div className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-8 px-8 rounded-xl shadow-md flex items-center justify-center">
    <Mail className="w-9 h-9" />
  </div>
  <span className="text-xs mt-2">Enviar Comunicado</span>
</Link>

      <a href="https://www.eidfs.unsj.edu.ar/" className="flex flex-col items-center">
  <div className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-8 px-8 rounded-xl shadow-md flex items-center justify-center">
    <Hotel className="w-9 h-9" />
  </div>
  <span className="text-xs mt-2">Pagina E.I.D.F.S.</span>
</a>

<a href="https://drive.google.com/drive/folders/1ZW3M64jotFXf0FUIBjZkW8X1EaMQstqR" className="flex flex-col items-center">
  <div className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-8 px-8 rounded-xl shadow-md flex items-center justify-center">
    <Clock11 className="w-9 h-9" />
  </div>
  <span className="text-xs mt-2">Horarios de Cursado</span>
</a>


      

     
    </>
  );
}

export default Aplicaciones;
