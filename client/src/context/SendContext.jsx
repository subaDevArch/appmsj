// SendContext.jsx
import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const SendContext = createContext();

export const useSendContext = () => useContext(SendContext);

export const SendProvider = ({ children }) => {
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState(null);

  const seleccionarAlumno = (alumno) => {
    setAlumnoSeleccionado(alumno);
  };

  const enviarMensaje = async (mensaje) => {
    try {
      // Realizar la solicitud HTTP utilizando Axios
      const response = await axios.post("/api/send", mensaje);
      // Aquí puedes manejar la respuesta, si es necesario
      console.log("Mensaje enviado:", response);
      return response.data; // O retorna cualquier dato relevante
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      throw error;
    }
  };

  return (
    <SendContext.Provider value={{ alumnoSeleccionado, seleccionarAlumno, enviarMensaje }}>
      {children}
    </SendContext.Provider>
  );
};
