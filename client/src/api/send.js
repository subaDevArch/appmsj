import axios from './axios'; // Asegúrate de importar Axios desde el archivo de configuración

export const enviarMensajeRequest = async (email) => {
  return axios.post('/enviado',email); // Cambia la ruta '/send' según tu configuración
};
