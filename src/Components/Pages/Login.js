import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login-page d-flex align-items-center justify-content-center">
     
      <div className="login-section card">
        <div className="card-body">
          <h3 className="text-center">Login</h3>
          <form>
            <div>
              <label for="inputEmail4" className="form-label">
                Email
              </label>
              <input type="email"  placeholder="Email"  className="form-control" id="inputEmail4" />

              <label for="inputPassword4" className="form-label">
                Password
              </label>
              <input type="password" placeholder="Password" className="form-control" id="inputPassword4" />
              <Link to="/admin" className="btn btn-primary mt-3">
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
