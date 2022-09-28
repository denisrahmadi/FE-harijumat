import React from "react";
import "./Regist.css";

function Regist(props) {
  return (
    <div>
      <h1 className="text-center">SIGN UP </h1>
      <form className="p-4 p-md-5 border rounded-3 bg-light">
        <div className="form-floating mb-2">
          <input type="fname" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label for="floatingInput">First Name</label>
        </div>
        <div className="form-floating mb-2">
          <input type="lname" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label for="floatingInput">Last Name</label>
        </div>
        <div className="form-floating mb-2">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label for="floatingInput">Email</label>
        </div>
        <div className="form-floating mb-2">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label for="floatingPassword">Password</label>
        </div>
        <div className="checkbox mb-2">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-outline-success mt-5" type="submit">
          Sign Up
        </button>
        <hr className="my-4" />
      </form>
    </div>
  );
}

export default Regist;
