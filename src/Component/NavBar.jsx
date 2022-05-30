import React from "react";
import { Link, useNavigate, useNavigationType } from "react-router-dom";
import Users from "./Users";
import { useAuth } from "../utils/helper";
import { useSelector } from "react-redux";

const NavBar = () => {
  const navigate = useNavigate();

  const count = useSelector((state) => state.counter.count);

  const logoutUser = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md mb-3 navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Abhishek Choudhari {count}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {useAuth() ? (
                <React.Fragment>
                  <li className="nav-item">
                    <Link className="posts" to="/posts">
                      Posts
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="comments" to="/comments">
                      Comments
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="albums" to="/albums">
                      Albums
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="photos" to="/photos">
                      Photos
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="todos" to="/todos">
                      Todos
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={logoutUser}>
                      Logout
                    </a>
                  </li>
                </React.Fragment>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="login" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="register" to="/register">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
