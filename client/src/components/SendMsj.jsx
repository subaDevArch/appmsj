/*import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const DetallesAlumnos = () => {
  const [email, setEmail] = useState(""); // Estado para almacenar el correo electrónico
  const [subject, setSubject] = useState("");
  const [mensaje, setMensaje] = useState(""); // Estado para almacenar el mensaje
  const [agruparEmails, setAgruparEmails] = useState(true); // Estado para controlar si se agrupan automáticamente los correos electrónicos
  const [isSending, setIsSending] = useState(false); // Estado para controlar la visibilidad del botón

  const location = useLocation();
  const navigate = useNavigate(); // Hook de navegación

  const selectedAlumnos = location.state ? location.state.selectedAlumnos : [];
  //console.log(selectedAlumnos);

  useEffect(() => {
    if (selectedAlumnos.length > 0 && agruparEmails) {
      const emailsAlumnos = selectedAlumnos
        .map((alumno) => alumno["Email Alumno:"])
        .join(", ");
      const emailsMadres = selectedAlumnos
        .map((alumno) => alumno["Email Madre o Tutor:"])
        .join(", ");
      const emailsPadres = selectedAlumnos
        .map((alumno) => alumno["Email Padre o Tutor:"])
        .join(", ");
      const todosLosEmails = [emailsAlumnos, emailsMadres, emailsPadres]
        .filter((email) => email.trim() !== "")
        .join(", ");
      setEmail(todosLosEmails);
      //console.log(todosLosEmails)
    }
  }, [selectedAlumnos, agruparEmails]);

  // Obtener una lista de cursos únicos de los alumnos seleccionados
  const uniqueCourses = [
    ...new Set(selectedAlumnos.map((alumno) => alumno["Curso al que asiste:"])),
  ];

  const sendMail = async (e) => {
    e.preventDefault();
    setIsSending(true); // Oculta el botón al iniciar el envío
    try {
      //console.log("Email:", email);
      //console.log("Asunto:", subject);
      //console.log("Mensaje:", mensaje);

      if (!email.trim() || !subject.trim() || !mensaje.trim()) {
        MySwal.fire({
          icon: 'warning',
          title: 'Campos Incompletos',
          text: 'Por favor, completa todos los campos.',
        });
        setIsSending(false); // Muestra el botón si hay campos incompletos
        return;
      }
      const response = await fetch("http://localhost:3000/api/enviado", {
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
        MySwal.fire({
          icon: "success",
          title: "Éxito",
          text: "Mensaje enviado con éxito",
        }).then(() => {
          // Redirige a la página /buscar-alumnos después de mostrar la alerta
          navigate("/buscar-alumnos");
        });
        // Limpiar los campos si es necesario
        setEmail("");
        setSubject("");
        setMensaje("");
      } else {
        MySwal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema al enviar el mensaje",
        });
        setIsSending(false); // Muestra el botón si hay un error
      }
    } catch (error) {
      MySwal.fire({
        icon: "error",
        title: "Error",
        text: `Error al enviar la solicitud: ${error.message}`,
      });
      setIsSending(false); // Muestra el botón si hay un error
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
                value={selectedAlumnos
                  .map((alumno) => alumno["Nombre y Apellido del Alumno:"])
                  .join(", ")}
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
                  className="border border-gray-300 rounded px-4 py-2
                  w-full"
                  aria-label="Default select example"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option value="">
                    ----------Titulo del mensaje----------
                  </option>
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
                rows="6"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 w-full"
              ></textarea>
            </div>
            <hr />
            {!isSending && ( // Condicional para mostrar/ocultar el botón
              <button
                type="submit"
                className="bg-gradient-to-r from-green-700 to-gray-600 hover:bg-gray-300 hover:text-white py-3 px-3 rounded-xl shadow-md text-white w-full mt-4"
              >
                Enviar Mensaje
              </button>
            )}
          </div>
        </form>
      ) : (
        <p>No se han seleccionado alumnos.</p>
      )}
    </div>
  );
};

export default DetallesAlumnos;
*/

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const DetallesAlumnos = () => {
  const [email, setEmail] = useState(""); 
  const [subject, setSubject] = useState("");
  const [mensaje, setMensaje] = useState(""); 
  const [agruparEmails, setAgruparEmails] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [archivo, setArchivo] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const selectedAlumnos = location.state ? location.state.selectedAlumnos : [];

  useEffect(() => {
    if (selectedAlumnos.length > 0 && agruparEmails) {
      const emailsAlumnos = selectedAlumnos
        .map((alumno) => alumno["Email Alumno:"])
        .join(", ");
      const emailsMadres = selectedAlumnos
        .map((alumno) => alumno["Email Madre o Tutor:"])
        .join(", ");
      const emailsPadres = selectedAlumnos
        .map((alumno) => alumno["Email Padre o Tutor:"])
        .join(", ");
      const todosLosEmails = [emailsAlumnos, emailsMadres, emailsPadres]
        .filter((email) => email.trim() !== "")
        .join(", ");
      setEmail(todosLosEmails);
    }
  }, [selectedAlumnos, agruparEmails]);

  const uniqueCourses = [
    ...new Set(selectedAlumnos.map((alumno) => alumno["Curso al que asiste:"])),
  ];

  const sendMail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    if (!email.trim() || !subject.trim() || !mensaje.trim()) {
      MySwal.fire({
        icon: 'warning',
        title: 'Campos Incompletos',
        text: 'Por favor, completa todos los campos.',
      });
      setIsSending(false);
      return;
    }

    const formData = new FormData();
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('mensaje', mensaje);
    if (archivo) {
      formData.append('archivo', archivo);
    }

    try {
      const response = await fetch("https://backend-msj.onrender.com/api/enviado", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        MySwal.fire({
          icon: "success",
          title: "Éxito",
          text: "Mensaje enviado con éxito",
        }).then(() => {
          navigate("/buscar-alumnos");
        });
        setEmail("");
        setSubject("");
        setMensaje("");
        setArchivo(null);
      } else {
        MySwal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema al enviar el mensaje",
        });
        setIsSending(false);
      }
    } catch (error) {
      MySwal.fire({
        icon: "error",
        title: "Error",
        text: `Error al enviar la solicitud: ${error.message}`,
      });
      setIsSending(false);
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
                value={selectedAlumnos
                  .map((alumno) => alumno["Nombre y Apellido del Alumno:"])
                  .join(", ")}
                readOnly
                rows={Math.min(selectedAlumnos.length, 5)}
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
              <label htmlFor="mensaje" className="block mb-1">Mensaje:</label>
              <textarea
                id="mensaje"
                rows="6"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 w-full"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block mb-1">Adjuntar Archivo:</label>
              <input
                type="file"
                onChange={(e) => setArchivo(e.target.files[0])}
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
            </div>
            <hr />
            {!isSending && (
              <button
                type="submit"
                className="bg-gradient-to-r from-green-700 to-gray-600 hover:bg-gray-300 hover:text-white py-3 px-3 rounded-xl shadow-md text-white w-full mt-4"
              >
                Enviar Mensaje
              </button>
            )}
          </div>
        </form>
      ) : (
        <p>No se han seleccionado alumnos.</p>
      )}
    </div>
  );
};

export default DetallesAlumnos;
