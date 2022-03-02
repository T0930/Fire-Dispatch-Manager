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
        <Route exact path="/active">
              <Active />
        </Route>
        <Route exact path="/interviews">
              <Interviews />
        </Route>
        <Route exact path="/rejections">
              <Rejections />
        </Route>
        <Route exact path="/inactive">
              <Inactive />
        </Route>
        <Route exact path="/application/:applicationId">
              <Application />
      </Route>
      <Route exact path="/">
              <Home />
        </Route>
        <Route exact path="/Login">
              <Login />
        </Route>
        <Route exact path="/Signup">
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