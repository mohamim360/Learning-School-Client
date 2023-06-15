import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../Social/SocialLogin";

const SignUp = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const { createUser, profile } = useContext(AuthContext);
  const navigate = useNavigate();
  const password = watch("password");
  const email = watch("email");
  const onSubmit = (data) => {
    console.log(data);
    console.log(email);
    console.log(password);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      profile(data.name, data.photoURL)
        .then(() => {
          const saveUser = { name: data.name, email: data.email };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="w-96">
        <h2 className="text-2xl font-bold mb-4">Registration</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded py-2 px-3"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded py-2 px-3"
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            {...register("password", {
              required: true,
              minLength: 6,
              pattern:
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/,
            })}
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded py-2 px-3"
          />
          {errors.password?.type === "required" && (
            <span className="text-red-500">Password is required</span>
          )}
          {errors.password?.type === "minLength" && (
            <span className="text-red-500">
              Password must be at least 6 characters long
            </span>
          )}
          {errors.password?.type === "pattern" && (
            <span className="text-red-500">
              Password must contain at least one uppercase letter, one lowercase
              letter, one number, and one special character
            </span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block mb-1">
            Confirm Password
          </label>
          <input
            {...register("confirmPassword", {
              required: true,
              validate: (value) =>
                value == password || "Passwords do not match",
            })}
            type="password"
            id="confirmPassword"
            className="w-full border border-gray-300 rounded py-2 px-3"
          />
          {errors.confirmPassword && (
            <span className="text-red-500">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="photoURL" className="block mb-1">
            Photo URL
          </label>
          <input
            {...register("photoURL")}
            type="text"
            id="photoURL"
            className="w-full border border-gray-300 rounded py-2 px-3"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4           py-2 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Sign Up
        </button>
      </form>
      <div>
        <p>Sign in using google</p>
      <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default SignUp;
