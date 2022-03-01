import React, { useState } from 'react';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Application from "../pages/Application";
import Active from '../pages/Active'
import Rejections from '../pages/Rejections'
import Inactive from '../pages/Inactive'
import Interviews from '../pages/Interviews'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});


function Dashboard() {
    const [currentPage, setCurrentPage] = useState('Home');
 
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
 
      <ApolloProvider client={client}>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} >
          <Router>

        <Switch>
          <div>
        <Route path="/active">
              <Active />
        </Route>
        <Route path="/interviews">
              <Interviews />
        </Route>
        <Route path="/rejections">
              <Rejections />
        </Route>
        <Route path="/inactive">
              <Inactive />
        </Route>
        <Route path="/application/:applicationId">
              <Application />
      </Route>
      <Route exact path="/">
              <Home />
        </Route>
        <Route path="/Login">
              <Login />
        </Route>
        <Route path="/Signup">
              <Signup />
        </Route>


      
      </div>
      </Switch>
      </Router>
      </NavBar>
      </ApolloProvider>

    );
  }

export default Dashboard;