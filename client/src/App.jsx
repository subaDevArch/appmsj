// App.jsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import ProfilePage from "./pages/ProfilePage";
import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TasksContext";
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "./components/NavBar";
import SendMsj from "./components/SendMsj";
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

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <AlumnoProvider>
          <BrowserRouter>
            <main /*className="container mx-auto px-10"*/>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />

                <Route path="/apps" element={<AppPage />} />

                <Route element={<ProtectedRoute />}>
                  <Route path="/tasks" element={<TasksPage />} />
                  <Route path="/ausentes" element={<ProfesoresAusentes />} />
                  <Route
                    path="/enviar-comunicado"
                    element={<EnviarComunicadoPage />}
                  />
                  <Route path="/buscar-alumnos" element={<BuscarAlumnos />} />
                  <Route path="/datos-alumnos" element={<DatosAlumnosPage />} />
                  <Route
                    path="/buscar-datos-alumnos"
                    element={<BuscarDatosPage />}
                  />
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
          </BrowserRouter>
        </AlumnoProvider>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
