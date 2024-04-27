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

  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = handleSubmit((data) => {
    signin(data).catch(handleLoginError);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
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
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          {errorMessage && (
            <div className="bg-red-500 p-2 text-white mb-4">
              {errorMessage}
            </div>
          )}
          <h1 className="text-2xl font-bold text-white">Login</h1>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
          <button type="submit" className="text-white">
            Login
          </button>
        </form>
        <p className="flex gap-x-2 justify-between text-white">
          Todavia no tienes una cuenta?{" "}
          <Link to="/register" className="text-sky-500">
            Registrarse
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
