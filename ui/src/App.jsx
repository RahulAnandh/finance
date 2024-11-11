import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {isLogin === false && (
            <Route path="/" element={<Login />}>
              <Route index element={<Login />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
