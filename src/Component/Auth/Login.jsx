import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  decrementCounter,
  incrementCounter,
} from "../../store/reducers/counterReducer";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      let response = await axios.post(
        `https://mkart-frontend.herokuapp.com/api/v1/auth/login`,
        {
          username,
          password,
        }
      );
      console.log(response);
      if (response.data.success) {
        localStorage.setItem("accessToken", response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const increment = () => {
    dispatch(incrementCounter(count + 1));
  };

  const decrement = () => {
    dispatch(decrementCounter(count - 1));
  };

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <div
        className="row justify-content-center align-item-center mt-5"
        style={{ height: "90vh" }}
      >
        <div className="col-5">
          <div className="card">
            <div className="card-body">
              <h4>Login</h4>
              <form onSubmit={loginUser}>
                <input
                  type="text"
                  placeholder="Username"
                  className="form-control mb-3"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="form-control mb-3"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button className="btn btn-primary">Login user</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
