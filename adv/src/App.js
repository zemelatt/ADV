import React, { lazy, Suspense } from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Adventure = lazy(() => import("./Component/Adventure/Adventure"));
const Home = lazy(() => import("./Component/Home/Home"));
const Register = lazy(() => import("./Component/Register-Login/Register"));
const NewAdv = lazy(() =>
  import("./Component/Add-Adventure/Add-New-Adventure")
);
const MoreInfo = lazy(() => import("./Component/Adventure/OneDetails"));
const Login = lazy(() => import("./Component/Register-Login/Login"));
const ForgotPass = lazy(() => import("./Component/Register-Login/ForgotPass"));
const NewPass = lazy(() => import("./Component/Register-Login/NewPass"));
const MyAdv = lazy(() => import("./Component/Adventure/myAdv/MyAdv"));
const Update = lazy(() => import("./Component/Adventure/myAdv/Update"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<h2>Waiting for it...</h2>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adv" element={<Adventure />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add-adventure" element={<NewAdv />} />
            <Route path="/login" element={<Login />} />
            <Route path="/my-adv/:id" element={<MyAdv />} />
            <Route path="/updating/:id" element={<Update />} />
            <Route path="/formating/password" element={<ForgotPass />} />
            <Route path="/new-password/:id" element={<NewPass />} />
            <Route path="/moreDetails/:id" element={<MoreInfo />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
