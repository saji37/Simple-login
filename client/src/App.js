import React from "react";
import Registration from "./pages/Registration";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
   <div>
    <Router>
      <Routes>
        <Route path="/register" element={<Registration/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
   </div>
  );
}

export default App;
