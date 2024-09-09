import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import create from 'zustand';
import Service from './pages/service';
import SignUp from './pages/signUp';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path='/services' element={<Service/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
