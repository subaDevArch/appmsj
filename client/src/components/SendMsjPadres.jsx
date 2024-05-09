import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { enviarMensajeRequest } from "../api/send"; // Importa la función enviarMensajeRequest

const DetallesAlumnos = () => {
  const [email, setEmail] = useState(""); // Estado para almacenar el correo electrónico
  const [subject, setSubject] = useState("");
  const [mensaje, setMensaje] = useState(""); // Estado para almacenar el mensaje
  const [agruparEmails, setAgruparEmails] = useState(true); // Estado para controlar si se agrupan automáticamente los correos electrónicos
  const [selectedCourses, setSelectedCourses] = useState([]); // Estado para almacenar los cursos seleccionados

  const location = useLocation();
  const selectedData = location.state ? location.state.selectedAlumnos : [];
  
  useEffect(() => {
    if (selectedData.length > 0 && agruparEmails) {
      const emails = selectedData.reduce((acc, curso) => {
        const alumnos = curso.alumnos;
        const emailsAlumnos = alumnos.map(alumno => alumno["Email Alumno:"]).join(", ");
        const emailsMadres = alumnos.map(alumno => alumno["Email Madre o Tutor:"]).join(", ");
        const emailsPadres = alumnos.map(alumno => alumno["Email Padre o Tutor:"]).join(", ");
        const todosLosEmails = [emailsAlumnos, emailsMadres, emailsPadres].filter(email => email.trim() !== "").join(", ");
        return acc.concat(todosLosEmails);
      }, []);
      setEmail(emails.join(", "));
    }
  }, [selectedData, agruparEmails]);

  // Obtener una lista de cursos únicos de los alumnos seleccionados
  useEffect(() => {
    if (selectedData.length > 0) {
      const courses = selectedData.map(curso => curso.nombre);
      setSelectedCourses(courses);
    }
  }, [selectedData]);

  const sendMail = async (e) => {
    e.preventDefault();
    try {
      console.log("Email:", email);
      console.log("Asunto:", subject);
      console.log("Mensaje:", mensaje);
  
      if (!email.trim() || !subject.trim() || !mensaje.trim()) {
        console.log("Por favor, completa todos los campos.");
        return;
      }
  
      const response = await fetch("https://backend-msj.onrender.com/api/enviado", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          subject: subject,
          mensaje: mensaje,
        }),
      });
  
      if (response.ok) {
        console.log("Email enviado correctamente");
        setEmail("");
        setSubject("");
        setMensaje("");
      } else {
        console.log("Error al enviar el correo");
      }
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">
        Detalles de los alumnos seleccionados
      </h2>
      {selectedData.length > 0 ? (
        <form onSubmit={sendMail}>
          <div className="mb-4">
            {selectedCourses.length === 1 && (
              <div className="mb-4">
                <label className="block mb-1">Curso:</label>
                <input
                  type="text"
                  value={selectedCourses[0]}
                  readOnly
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                />
              </div>
            )}
            {selectedCourses.length > 1 && (
              <div className="mb-4">
                <label className="block mb-1">Cursos:</label>
                <input
                  type="text"
                  value={selectedCourses.join(", ")}
                  readOnly
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                />
              </div>
            )}
            {selectedCourses.length === 1 && (
              <div className="mb-4">
                <label className="block mb-1">Nombres y Apellidos:</label>
                <textarea
                  value={selectedData[0].alumnos.map(alumno => alumno["Nombre y Apellido del Alumno:"]).join(", ")}
                  readOnly
                  rows={Math.min(selectedData[0].alumnos.length, 5)} // Establece un límite máximo de 5 filas
                  className="border border-gray-300 rounded px-4 py-2 w-full overflow-y-auto"
                />
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1">Asunto:</label>
            <div className="form-group mb-3">
              <select
                name="titulo"
                className="border border-gray-300 rounded px-4 py-2 w-full"
                aria-label="Default select example"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              >
                <option value="">----------Titulo del mensaje----------</option>
                <option value="CONDUCTA">Conducta</option>
                <option value="TARDANZA">Tardanza</option>
                <option value="AUSENTE">Ausente</option>
                <option value="COMUNICADO">Comunicado</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="mensaje" className="block mb-1">
              Mensaje:
            </label>
            <textarea
              id="mensaje"
              rows="3"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 w-full"
            ></textarea>
          </div>
          <hr />
          <button
            type="submit"
            className="bg-gray-100 hover:bg-gray-300 hover:text-white py-3 px-3 rounded-xl shadow-md text-gray-500 w-full mt-4"
          >
            Enviar Mensaje
          </button>
        </form>
      ) : (
        <p>No se han seleccionado alumnos.</p>
      )}
    </div>
  );
};

export default DetallesAlumnos;
