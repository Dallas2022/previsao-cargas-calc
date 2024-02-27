import React from "react";
import { Routes, Route, Link } from 'react-router-dom'
import Abertura from "./components/Abertura";
import Local from "./components/Local";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Abertura />}></Route>
        <Route path="/locais" element={<Local />}></Route>
        <Route path="/*" element={"Erro !"}></Route>
      </Routes>
    </>
  )
}

export default App