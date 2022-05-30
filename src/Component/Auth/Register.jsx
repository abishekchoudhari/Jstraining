import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const registerUser = async (e) => {
    e.preventDefault();

    try {
      let response = await axios.post(
        `https://mkart-frontend.herokuapp.com/api/v1/auth/register`,
        {
          username,
          password,
        }
      );
      console.log(response);
      if (response.data.success) navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div
        className="row justify-content-center align-item-center"
        style={{ height: "90vh" }}
      >
        <div className="col-5">
          <div className="card">
            <div className="card-body">
              <h4>Register</h4>
              <form onSubmit={registerUser}>
                <input
                  type="text"
                  placeholder="username"
                  className="form-control mb-3"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="password"
                  className="form-control mb-3"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="confirm password"
                  className="form-control mb-3"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button className="btn btn-primary">RegisterUser</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
