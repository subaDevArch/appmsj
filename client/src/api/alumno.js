import axios from './axios'; // Importa Axios desde el archivo donde lo hayas configurado

export const obtenerAlumnosRequest = () => axios.get('/alumnos');
//export const obtenerAlumnoPorIdRequest = (id) => axios.get(`/alumnos/${id}`);

