import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/Screens/Home";
import Reset from "./assets/Screens/ResetPassword";
import Create from "./assets/Screens/Create";
import Forgot from "./assets/Screens/Forgot";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/reset" element = {<Reset/>}/>
        <Route path = "/create" element = {<Create/>}/>
        <Route path = "/reset" element = {<Forgot/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
