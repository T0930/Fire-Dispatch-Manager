import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import './style.css'



  
  function App() {
    return (

      <Router>
        
          <Dashboard />
           
      </Router>

    );
  }

export default App;
