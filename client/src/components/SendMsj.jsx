import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


const DetallesAlumnos = () => {
  const [email, setEmail] = useState(""); // Estado para almacenar el correo electrónico
  const [subject, setSubject] = useState("");
  const [mensaje, setMensaje] = useState(""); // Estado para almacenar el mensaje
  const [agruparEmails, setAgruparEmails] = useState(true); // Estado para controlar si se agrupan automáticamente los correos electrónicos

  const location = useLocation();
  const selectedAlumnos = location.state ? location.state.selectedAlumnos : [];
  console.log(selectedAlumnos);

  useEffect(() => {
    if (selectedAlumnos.length > 0 && agruparEmails) {
      const emailsAlumnos = selectedAlumnos.map((alumno) => alumno["Email Alumno:"]).join(", ");
      const emailsMadres = selectedAlumnos.map((alumno) => alumno["Email Madre o Tutor:"]).join(", ");
      const emailsPadres = selectedAlumnos.map((alumno) => alumno["Email Padre o Tutor:"]).join(", ");
      const todosLosEmails = [emailsAlumnos, emailsMadres, emailsPadres].filter(email => email.trim() !== "").join(", ");
      setEmail(todosLosEmails);
      //console.log(todosLosEmails)
    }
  }, [selectedAlumnos, agruparEmails]);

  // Obtener una lista de cursos únicos de los alumnos seleccionados
  const uniqueCourses = [...new Set(selectedAlumnos.map(alumno => alumno["Curso al que asiste:"]))];

  const sendMail = async (e) => {
    e.preventDefault();
    try {
      //console.log("Email:", email);
      //console.log("Asunto:", subject);
      //console.log("Mensaje:", mensaje);
  
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
      {selectedAlumnos.length > 0 ? (
        <form onSubmit={sendMail}>
          <div>
            <div className="mb-4">
              <label className="block mb-1">Nombres y Apellidos:</label>
              <textarea
                value={selectedAlumnos.map((alumno) => alumno["Nombre y Apellido del Alumno:"]).join(", ")}
                readOnly
                rows={Math.min(selectedAlumnos.length, 5)} // Establece un límite máximo de 5 filas
                className="border border-gray-300 rounded px-4 py-2 w-full overflow-y-auto"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Cursos:</label>
              <input
                type="text"
                value={uniqueCourses.join(", ")}
                readOnly
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
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
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Enviar Mensaje
            </button>
          </div>
        </form>
      ) : (
        <p>No se han seleccionado alumnos.</p>
      )}
    </div>
  );
};

export default DetallesAlumnos;
