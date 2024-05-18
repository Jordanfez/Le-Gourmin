import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { FooterApp } from "./component/footer/Fotter";
// import { Navbar } from "./component/navBar/Navbar";
import { HomePage } from "./component/pages/Home/index";


function App() {

  return (
    <BrowserRouter>
    {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Ajoutez d'autres routes ici si nécessaire */}
      </Routes>
      {/* <FooterApp /> */}
    </BrowserRouter>
  )
}

export default App
