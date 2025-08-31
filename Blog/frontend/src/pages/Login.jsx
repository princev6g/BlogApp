import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="offset-md-3 col-md-6">
          <div className="card p-5 shadow mt-5">
            <h3 className="fs-4 fw-normal mb-3 text-success">
              <i class="bi bi-person-lock"></i> User Login
            </h3>
            <p className="small">
              Need a Spectrum account?{" "}
              <Link className="link-success" to={"/register"}>
                Create an account
              </Link>
            </p>
            <div className="mb-3">
              <label htmlFor="username" className="form-label fw-medium">
                Username / Email
              </label>
              <input type="text" className="form-control" />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-medium d-flex justify-content-between">
                Password
                <span className="text-success">
                  <i class="bi bi-eye"></i> Show
                </span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <div class="form-check">
                <input className="form-check-input" type="checkbox" value="" id="logged" />
                <label className="form-check-label" for="logged">
                  Keep me logged in
                </label>
              </div>
            </div>

            <button className="btn btn-success">Login</button>
            <p className="my-2">
              <Link className="link-success" to={"/register"}>
                Forget Password?
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
