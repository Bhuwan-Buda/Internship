import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./public/Login";
import "./App.css";
import PublicPage from "./public/PublicPage";
import Dashboard from "./private/Dashboard";
import Private from "./private/Private";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const value = useSelector(
    (state) => state.authenticateReducer.isAuthenticated
  );
  console.log(value);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {value ? (
            <Route path="/" exact element={<Dashboard />} />
          ) : (
            <Route path="/" exact element={<Login />} />
          )}
          <Route path="/public" exact element={<PublicPage />} />
          <Route path="/private" exact element={<Private />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
