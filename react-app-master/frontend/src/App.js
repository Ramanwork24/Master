import React from "react";
 import {Routes, Route } from "react-router-dom";
 import Register from "./page/Register/Register";
 import Login from "./page/Login/Login";
import Dashboard from "./page/Dashboard/Dashboard";
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from "../src/components/Sidebar/Sidebar"
import './App.css';



function App() {
  return (
    

    <div className="App">
      
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/sidebar" Component={Sidebar} />
      </Routes>
             
            

    
    </div>
  );
}

export default App;
