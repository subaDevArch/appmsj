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

  const { signin, errors: signinErrors, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = handleSubmit((data) => {
    signin(data).catch(handleLoginError);
    
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/apps");
    
    if (signinErrors && signinErrors.length > 0) {
      const errorMessages = signinErrors.join(", ");
      setErrorMessage(errorMessages);
    }
  }, [isAuthenticated, signinErrors, navigate]);

  const handleLoginError = (error) => {
    console.log("Error en inicio de sesión:", error);
    if (error.response && error.response.status === 400) {
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
          <button type="submit" className="bg-gray-100 hover:bg-gray-300 hover:text-white py-3 px-3 rounded-xl shadow-md text-gray-500 w-full mt-4">
            Iniciar Sesion
          </button>
        </form>
      </div>
    </div>
    </div>
   
  );
  
}

export default LoginPage;
