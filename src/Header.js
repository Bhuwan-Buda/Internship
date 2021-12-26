import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, saveData } from "./redux/action/index";
import "./App.css";

const Header = () => {
  console.log("Header loaded");
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const value = useSelector(
    (state) => state.authenticateReducer.isAuthenticated
  );
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-white">
      <div className="container-fluid">
        <h6 className="navbar-brand">New App</h6>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-white text-white"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {value ? (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/private" className="nav-link active">
                  Private
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/public" className="nav-link active">
                  Public
                </Link>
              </li>
            </ul>
          )}
          {value ? (
            <React.Fragment>
              <input
                className="form-control m-2"
                type="text"
                placeholder="Enter some data..."
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
              <button
                className="btn btn-outline-success"
                title="save data"
                type="button"
                onClick={() => dispatch(saveData(data), setData(""))}
              >
                Save
              </button>
              <button
                className="btn btn-outline-danger"
                title="Logout"
                onClick={() => dispatch(logout())}
              >
                <i className="fas fa-power-off"></i>
              </button>
            </React.Fragment>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Header;
