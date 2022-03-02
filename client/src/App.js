import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Dashboard from "./components/Dashboard";
import Application from "./pages/Application";
// import Inactive from "./pages/Inactive";
import './style.css'



  
  function App() {
    return (

      <Router>
        
          <Dashboard />
           
      </Router>

    );
  }

export default App;
