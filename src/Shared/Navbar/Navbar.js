import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuLists = (
    <>
      <Link className="hover:border-b-2 border-primary mr-3" to="/">
        Home
      </Link>
      <Link className="hover:border-b-2 border-primary mr-3" to="/blog">
        Blog
      </Link>
      <Link className="hover:border-b-2 border-primary mr-3" to="/login">
        Login
      </Link>
      <Link className="hover:border-b-2 border-primary mr-3" to="/register">
        Register
      </Link>
    </>
  );
  return (
    <div className="navbar bg-base-100 md:p-12 lg:p-12">
      <div className="">
        <Link to="/" className="btn btn-ghost normal-case text-xl text-primary">
          USED CARS BUY SELL
        </Link>
      </div>

      <div className="flex gap-2 lg:w-full md:justify-center md:w-full lg:justify-center">
        <div className="form-control w-96">
          <input
            type="text"
            placeholder="Search"
            className="input border border-2 border-primary w-full rounded-full"
          />
        </div>
      </div>
      <div className="">{menuLists}</div>
    </div>
  );
};

export default Navbar;
