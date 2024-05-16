import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Hotel,
  Clock11,
  FileText,
  LibraryBig,
  BookOpenCheck,
  Notebook,
  NotebookTabs,
  FileClock,
  BookPlus,
  CalendarDays
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

function Aplicaciones() {
  const { isAuthenticated, user } = useAuth();
  return (
    <>
    
      <Link to="/enviar-comunicado" className="flex flex-col items-center">
        <div className="bg-white hover:bg-gray-300 text-blue-500 font-bold py-8 px-8 rounded-xl shadow-md flex items-center justify-center">
          <Mail className="w-9 h-9" />
        </div>
        <span className="text-xs mt-2">Enviar Comunicado</span>
      </Link>

      <a
        href="https://www.eidfs.unsj.edu.ar/"
        className="flex flex-col items-center"
      >
        <div className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-8 px-8 rounded-xl shadow-md flex items-center justify-center">
          <Hotel className="w-9 h-9" />
        </div>
        <span className="text-xs mt-2">Pagina E.I.D.F.S.</span>
      </a>

      <a
        href="https://drive.google.com/drive/folders/1ZW3M64jotFXf0FUIBjZkW8X1EaMQstqR"
        className="flex flex-col items-center"
      >
        <div className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-8 px-8 rounded-xl shadow-md flex items-center justify-center">
          <Clock11 className="w-9 h-9" />
        </div>
        <span className="text-xs mt-2">Horarios de Cursado</span>
      </a>

      <Link to="/buscar-datos-alumnos" className="flex flex-col items-center">
        <div className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-8 px-8 rounded-xl shadow-md flex items-center justify-center">
          <FileText className="w-9 h-9" />
        </div>
        <span className="text-xs mt-2">Datos Alumnos</span>
      </Link>

      <a
        href="https://campusvirtualeidfs.unsj.edu.ar/login/index.php"
        className="flex flex-col items-center"
      >
        <div className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-8 px-8 rounded-xl shadow-md flex items-center justify-center">
          <LibraryBig className="w-9 h-9" />
        </div>
        <span className="text-xs mt-2">Campus</span>
      </a>

      <a
        href="https://sga.eidfs.unsj.edu.ar/public/"
        className="flex flex-col items-center"
      >
        <div className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-8 px-8 rounded-xl shadow-md flex items-center justify-center">
          <BookOpenCheck className="w-9 h-9" />
        </div>
        <span className="text-xs mt-2">Gestiòn Academica</span>
      </a>
      <a
        href="https://www.eidfs.unsj.edu.ar/institucional/institucional/76"
        className="flex flex-col items-center"
      >
        <div className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-8 px-8 rounded-xl shadow-md flex items-center justify-center">
          <Notebook className="w-9 h-9" />
        </div>
        <span className="text-xs mt-2 ml-2.5">
          Planes de Estudio Ciclo Basico
        </span>
      </a>
      <a
        href="https://www.eidfs.unsj.edu.ar/institucional/institucional/79"
        className="flex flex-col items-center"
      >
        <div className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-8 px-8 rounded-xl shadow-md flex items-center justify-center">
          <NotebookTabs className="w-9 h-9" />
        </div>
        <span className="text-xs mt-2 ml-2.5">
          Planes de Estudio Ciclo Tecnico
        </span>
      </a>
      <a
        href="https://preceptor2punto0.netlify.app/horarios"
        className="flex flex-col items-center"
      >
        <div className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-8 px-8 rounded-xl shadow-md flex items-center justify-center">
          < FileClock className="w-9 h-9" />
        </div>
        <span className="text-xs mt-2">Horario Profesores</span>
      </a>
      <a
        href="https://www.eidfs.unsj.edu.ar/institucional/institucional/59"
        className="flex flex-col items-center"
      >
        <div className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-8 px-8 rounded-xl shadow-md flex items-center justify-center">
          < BookPlus className="w-9 h-9" />
        </div>
        <span className="text-xs mt-2 ml-2.5">Horarios de Consultas</span>
      </a>
      <a
        href="https://www.eidfs.unsj.edu.ar/panel_eidfs/archivos/secciones/7a7740d0-f378-11ee-8ff4-1620e2a54b42.pdf"
        className="flex flex-col items-center"
      >
        <div className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-8 px-8 rounded-xl shadow-md flex items-center justify-center">
          < CalendarDays className="w-9 h-9" />
        </div>
        <span className="text-xs mt-2 ml-2.5">Calendario Escolar</span>
      </a>

      
        <Link to="/ausentes" className="flex flex-col items-center">
          <div className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-8 px-8 rounded-xl shadow-md flex items-center justify-center">
            <FileText className="w-9 h-9" />
          </div>
          <span className="text-xs mt-2">Profesores Ausentes</span>
        </Link>
      
     
     
     
    </>
  );
}

export default Aplicaciones;
