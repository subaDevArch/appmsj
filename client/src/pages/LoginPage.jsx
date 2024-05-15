import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: signinErrors, isAuthenticated, user } = useAuth(); // Agrega 'user' al destructuring

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = handleSubmit(async (data) => {
    try {
      await signin(data); // Llama a la función de inicio de sesión sin almacenar la respuesta directamente
      if (isAuthenticated && user) {
        console.log(`Welcome, ${user.username}!`); // Muestra un mensaje de bienvenida en la consola
        navigate("/apps"); // Redirige a la página de aplicaciones después del inicio de sesión exitoso
      }
    } catch (error) {
      handleLoginError(error);
    }
  });

  useEffect(() => {
    if (signinErrors && signinErrors.length > 0) {
      const errorMessages = signinErrors.join(", ");
      setErrorMessage(errorMessages);
    }
  }, [signinErrors]);

  const handleLoginError = (error) => {
    console.log("Error en inicio de sesión:", error);
    if (error.response && error.response.status === 400) {
      console.log("Contraseña incorrecta");
      setErrorMessage("Contraseña incorrecta");
    }
  };

  return (
    <div className="h-screen">
      <div className="flex h-[calc(100vh-100px)] items-center justify-center bg-gray-150">
        <div className="max-w-md w-full p-10 rounded-md">
          <form onSubmit={onSubmit}>
            {errorMessage && (
              <div className="bg-red-500 p-2 text-white mb-4">
                {errorMessage}
              </div>
            )}
            <h1 className="text-2xl font-bold text-gray-500 text-center mb-4">
              Bienvenido!
            </h1>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full bg-zinc-300 text-white px-4 py-2 rounded-md my-2"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500">Email is required</p>}
            <input
              type="password"
              {...register("password", { required: true })}
              className="w-full bg-zinc-300 text-white px-4 py-2 rounded-md my-2"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500">Password is required</p>
            )}
            <button
              type="submit"
              className="bg-gray-100 hover:bg-gray-300 hover:text-white py-3 px-3 rounded-xl shadow-md text-gray-500 w-full mt-4"
            >
              Iniciar Sesion
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

/*import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { loginRequest } from "../api/auth"; // Importa la función de solicitud de inicio de sesión

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await loginRequest(data); // Realiza la solicitud de inicio de sesión
      console.log("User ID:", response.data.id); // Accede al ID del usuario en la respuesta
      console.log("Username:", response.data.username); // Accede al nombre de usuario en la respuesta
      
      // Redirecciona al usuario después de un inicio de sesión exitoso
      if (response.data.id && response.data.username) {
        navigate("/apps"); // Redirige a la página de aplicaciones
      } else {
        setErrorMessage("Error al iniciar sesión");
      }
    } catch (error) {
      console.log("Error en inicio de sesión:", error);
      if (error.response && error.response.status === 400) {
        setErrorMessage("Contraseña incorrecta");
      } else {
        setErrorMessage("Error al iniciar sesión");
      }
    }
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/apps");
    if (signinErrors && signinErrors.length > 0) {
      const errorMessages = signinErrors.join(", ");
      setErrorMessage(errorMessages);
    }
  }, [isAuthenticated, signinErrors, navigate]);

  return (
    <div className="h-screen">
      <div className="flex h-[calc(100vh-100px)] items-center justify-center bg-gray-150">
        <div className="max-w-md w-full p-10 rounded-md">
          <form onSubmit={onSubmit}>
            {errorMessage && (
              <div className="bg-red-500 p-2 text-white mb-4">
                {errorMessage}
              </div>
            )}
            <h1 className="text-2xl font-bold text-gray-500 text-center mb-4">
              Bienvenido!
            </h1>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full bg-zinc-300 text-white px-4 py-2 rounded-md my-2"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500">Email is required</p>}
            <input
              type="password"
              {...register("password", { required: true })}
              className="w-full bg-zinc-300 text-white px-4 py-2 rounded-md my-2"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500">Password is required</p>
            )}
            <button
              type="submit"
              className="bg-gray-100 hover:bg-gray-300 hover:text-white py-3 px-3 rounded-xl shadow-md text-gray-500 w-full mt-4"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;*/
