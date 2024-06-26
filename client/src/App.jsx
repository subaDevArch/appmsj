// App.jsx

import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import ProfilePage from "./pages/ProfilePage";
import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TasksContext";
import ProtectedRoute from "./ProtectedRoute";
import SendPage from "./pages/SendPage";
import EnviarComunicadoPage from "./pages/EnviarComunicadoPage";
import BuscarAlumnos from "./pages/BuscarAlumnos";
import { AlumnoProvider } from "./context/AlumnoContext";
import SendPadres from "./pages/SendPadres";
import BuscarCursos from "./pages/BuscarCursos";
import Header from "./components/Header";
import AppPage from "./pages/AppPage";
import BuscarDatosPage from "./pages/BuscarDatosPage";
import DatosAlumnosPage from "./pages/DatosAlumnosPage";
import ProfesoresAusentes from "./pages/ProfesoresAusentes";
import Loader from "./components/Loader"; // Importa el componente Loader

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <AlumnoProvider>
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </AlumnoProvider>
      </TaskProvider>
    </AuthProvider>
  );
}

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const fakeDataFetch = () => {
        setTimeout(() => {
          setIsLoading(false);
        }, 5000); // Simula una carga de datos de 5 segundos
      };
      fakeDataFetch();
    } else {
      setIsLoading(false);
    }
  }, [location.pathname]);

  if (isLoading && location.pathname === "/") {
    return <Loader />;
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/apps" element={<AppPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/ausentes" element={<ProfesoresAusentes />} />
          <Route path="/enviar-comunicado" element={<EnviarComunicadoPage />} />
          <Route path="/buscar-alumnos" element={<BuscarAlumnos />} />
          <Route path="/datos-alumnos" element={<DatosAlumnosPage />} />
          <Route path="/buscar-datos-alumnos" element={<BuscarDatosPage />} />
          <Route path="/buscar-por-curso" element={<BuscarCursos />} />
          <Route path="/send-alumnos" element={<SendPage />} />
          <Route path="/send-cursos" element={<SendPadres />} />
          <Route path="/add-task" element={<TaskFormPage />} />
          <Route path="/tasks/:id" element={<TaskFormPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
      <Header />
    </main>
  );
}

export default App;
