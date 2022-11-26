import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { authContext } from "../../contexts/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(authContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.error("Logged out!!");
      })
      .catch(() => {});
  };

  const menuItems = (
    <>
      <Link className="hover:border-b-2 border-primary mr-3" to="/">
        Home
      </Link>
      <Link className="hover:border-b-2 border-primary mr-3" to="/blog">
        Blog
      </Link>
      <Link className="hover:border-b-2 border-primary mr-3" to="/dashboard">
        Dashboard
      </Link>

      {user?.uid ? (
        <>
          <button
            onClick={handleLogOut}
            className="text-primary font-medium btn btn-sm"
          >
            LOG OUT
          </button>
        </>
      ) : (
        <>
          <Link className="hover:border-b-2 border-primary mr-3" to="/login">
            Login
          </Link>
          <Link className="hover:border-b-2 border-primary mr-3" to="/register">
            Register
          </Link>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 flex justify-between p-7">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl text-primary"
          >
            USED CARS BUY SELL
          </Link>
        </div>
        <div className="form-control hidden md:block w-96 mr-4">
          <input
            type="text"
            placeholder="Search"
            className="input border border-2 border-primary w-full rounded-full"
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <label
          htmlFor="dashboard-drawer"
          tabIndex={2}
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
