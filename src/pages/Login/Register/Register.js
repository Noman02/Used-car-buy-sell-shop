import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { authContext } from "../../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const { createUser, updateUser, popupSignUp } = useContext(authContext);

  const handleRegister = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    console.log(name, email, password);

    //create user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("User created successfully");
        updateUserProfile(name);
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        console.log(error);
      });
  };

  //popup register
  const handlePopUp = () => {
    popupSignUp()
      .then((result) => {
        const user = result.user;
        toast.success("successfully signup with google");
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const updateUserProfile = (name) => {
    const profile = {
      displayName: name,
    };
    updateUser(profile);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col max-w-md rounded-md sm:p-10 bg-gray-200 dark:text-gray-100">
        <div className="mb-4 text-center">
          <h1 className=" text-4xl font-bold">Register</h1>
        </div>
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm">Name</label>
              <input
                {...register("name")}
                placeholder="Your Name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                {...register("password")}
                type="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Choose Your Account Type
                </label>
              </div>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Who shot first?
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button className="btn btn-secondary w-full px-8 py-3 font-semibold rounded-md text-white">
                Register
              </button>
              <button
                onClick={handlePopUp}
                aria-label="Register with Google"
                className="border border-secondary flex items-center justify-center w-full p-2 mt-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
                <p>Register with Google</p>
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-400">
              Already have an account?
              <Link
                to="/login"
                rel="noopener noreferrer"
                href="#"
                className="hover:underline dark:text-violet-400"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
