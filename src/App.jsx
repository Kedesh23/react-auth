import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/Screens/Home";
import Reset from "./assets/Screens/ResetPassword";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/reset" element = {<Reset/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
