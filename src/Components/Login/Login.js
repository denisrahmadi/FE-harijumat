import React from "react";
import "./Login.css";
import signin from "../../Image/signin.jpg";
function Login() {
  return (
    <>
      {/* Form Login */}
      <div className="container">
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
          <div className="row align-items-center g-lg-5 py-5">
            <div className="col-lg-7 ">
              <img src={signin} alt="" width="420" height="420" />
            </div>
            <div className="col-md-10 mx-auto col-lg-5">
              <h1 className="text-center fw-bold">Sign In</h1>
              <form className="p-4 p-md-5 border rounded-3 bg-light">
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                  <label for="floatingPassword">Password</label>
                </div>
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <button className="w-100 btn btn-lg btn-outline-success" type="submit">
                  Sign In
                </button>
                <hr className="my-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
