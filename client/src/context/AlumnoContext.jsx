import React, { useContext, useState, createContext } from "react";
import { obtenerAlumnosRequest } from "../api/alumno"; // Suponiendo que tienes un archivo alumnos.js en tu carpeta api que contiene las funciones para hacer las solicitudes HTTP relacionadas con los alumnos

const AlumnoContext = createContext();

export const useAlumnos = () => {
  const context = useContext(AlumnoContext);

  if (!context) {
    throw new Error("useAlumnos debe ser usado dentro de un AlumnoProvider");
  }
  
  return context;
};

export function AlumnoProvider({ children }) {
  const [alumnos, setAlumnos] = useState([]);
  

  const obtenerAlumnos = async () => {
    try {
      const res = await obtenerAlumnosRequest(); // Suponiendo que tienes una función getAlumnosRequest en tu archivo de api/alumnos.js que obtiene la lista de alumnos
      setAlumnos(res.data);
      console.log(res.data);
      
      
    } catch (error) {
      console.error("Error al obtener los alumnos:", error);
    }
  };

  return (
    <AlumnoContext.Provider value={{ alumnos, obtenerAlumnos }}>
      {children}
    </AlumnoContext.Provider>
  );
}
