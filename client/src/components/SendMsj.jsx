
/*
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
*/import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useAuth } from "../context/AuthContext"; // Importar el contexto de autenticación

const MySwal = withReactContent(Swal);

const DetallesAlumnos = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [agruparEmails, setAgruparEmails] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [archivo, setArchivo] = useState(null);
  const [mensajePersonalizado, setMensajePersonalizado] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth(); // Obtener isAuthenticated y user del contexto de autenticación

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

  // Definir mensajes predeterminados para cada asunto
  const mensajesPredeterminados = {
    CONDUCTA: (alumnos, nombreUsuario) => {
      if (alumnos.length > 0) {
        const nombreAlumno = alumnos[0]["Nombre y Apellido del Alumno:"];
        const fechaHoy = new Date().toLocaleDateString("es-ES", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });
    
        return `Estimados Padres o Tutores,
    
          Nos dirigimos a ustedes para informarles que el alumno ${nombreAlumno} ha mostrado un comportamiento inadecuado en clase el día de hoy, ${fechaHoy}. Es crucial para nosotros mantenerles informados sobre el comportamiento de sus hijos para garantizar un entorno de aprendizaje positivo y seguro.
    
          Si desean más detalles sobre la situación o tienen alguna pregunta, por favor no duden en comunicarse con nosotros. Estamos aquí para apoyarles en cualquier consulta o preocupación que puedan tener.
    
          Agradecemos su colaboración y apoyo en este proceso educativo.
    
          Atentamente,
          ${nombreUsuario}
        `;
      }
      return "Estimados Padres o Tutores, les informamos que un alumno ha mostrado un comportamiento inadecuado en clase hoy. Si desean más detalles, por favor comuníquense con nosotros.";
    },
    
    TARDANZA: (alumnos, nombreUsuario) => {
      if (alumnos.length > 0) {
        const nombreAlumno = alumnos[0]["Nombre y Apellido del Alumno:"];
        const fechaHoy = new Date().toLocaleDateString("es-ES", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });
    
        return `Estimados Padres o Tutores,
    
          Nos dirigimos a ustedes para informarles que el alumno ${nombreAlumno} no pudo asistir a clase el día de hoy, ${fechaHoy}. Es importante para nosotros mantenerles al tanto de la asistencia de sus hijos, ya que la regularidad en la asistencia contribuye significativamente al progreso académico y social del estudiante.
    
          Si desean más detalles sobre la ausencia o tienen alguna pregunta, por favor no duden en comunicarse con nosotros. Estamos aquí para ayudarles y apoyarles en todo lo necesario.
    
          Agradecemos su comprensión y colaboración en este proceso educativo.
    
          Atentamente,
          ${nombreUsuario}
        `;
      }
      return "Estimados Padres o Tutores, les informamos que un alumno no pudo asistir a clase el día de hoy. Si desean más detalles, por favor comuníquense con nosotros.";
    },
    
    AUSENTE: (alumnos, nombreUsuario) => {
      if (alumnos.length > 0) {
        const nombreAlumno = alumnos[0]["Nombre y Apellido del Alumno:"];
        const fechaHoy = new Date().toLocaleDateString("es-ES", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });
    
        return `Estimados Padres o Tutores,
    
          Les informamos que el alumno ${nombreAlumno} no pudo asistir a clase el día de hoy, ${fechaHoy}. Nos gustaría recordarles la importancia de la asistencia regular para el progreso académico de los estudiantes.
    
          Por favor, si desean más detalles o tienen alguna pregunta, no duden en comunicarse con nosotros.
    
          Saludos cordiales,
          ${nombreUsuario}
        `;
      }
      return "Mensaje predeterminado para ausente...";
    },
    COMUNICADO: (alumnos, nombreUsuario) => {
      if (alumnos.length > 0) {
        const fechaHoy = new Date().toLocaleDateString("es-ES", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });
    
        return `Estimados Padres o Tutores,
    
          Les informamos que el alumno ${alumnos[0]["Nombre y Apellido del Alumno:"]} .........., 
          ${fechaHoy}.
    
          Para más detalles, por favor no duden en comunicarse con nosotros.
    
          Saludos cordiales,
          ${nombreUsuario}
        `;
      }
      return "Estimados Padres o Tutores, les informamos sobre un comunicado importante. Para más detalles, por favor comuníquense con nosotros.";
    },
    
  };

  // Función para obtener el mensaje predeterminado
  const obtenerMensajePredeterminado = (alumnos, nombreUsuario) => {
    if (subject in mensajesPredeterminados) {
      const mensajePredeterminado = mensajesPredeterminados[subject];
      if (typeof mensajePredeterminado === "function") {
        return mensajePredeterminado(alumnos, nombreUsuario);
      }
      return mensajePredeterminado;
    }
    return "";
  };

  // Función para enviar el correo
  // Función para enviar el correo
const sendMail = async (e) => {
  e.preventDefault();
  setIsSending(true);

  // Validar campos antes de enviar
  if (!email.trim() || !subject.trim() || (!mensajePersonalizado.trim() && !obtenerMensajePredeterminado(selectedAlumnos, user.username).trim())) {
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
  formData.append('mensaje', mensajePersonalizado || obtenerMensajePredeterminado(selectedAlumnos, user.username));
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
      setMensajePersonalizado("");
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


  // Actualizar el mensaje predeterminado cuando cambia el asunto seleccionado
  useEffect(() => {
    if (subject in mensajesPredeterminados) {
      setMensajePersonalizado("");
    } else {
      setMensajePersonalizado("");
    }
  }, [subject]);

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
                  <option value="">Selecciona un asunto</option>
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
                value={mensajePersonalizado || obtenerMensajePredeterminado(selectedAlumnos, user.username)}
                onChange={(e) => setMensajePersonalizado(e.target.value)}
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

