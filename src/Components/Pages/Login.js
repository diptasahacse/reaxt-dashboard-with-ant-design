import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login-page d-flex align-items-center justify-content-center">
     
      <div className="login-section card">
        <div class="card-body">
          <h3 className="text-center">Login</h3>
          <form>
            <div>
              <label for="inputEmail4" class="form-label">
                Email
              </label>
              <input type="email"  placeholder="Email"  class="form-control" id="inputEmail4" />

              <label for="inputPassword4" class="form-label">
                Password
              </label>
              <input type="password" placeholder="Password" class="form-control" id="inputPassword4" />
              <Link to="/admin" class="btn btn-primary mt-3">
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
