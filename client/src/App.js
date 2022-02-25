import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Dashboard from "./components/Dashboard";


// const App = () => <Dashboard />;

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
  });
  
  function App() {
    return (
      <ApolloProvider client={client}>
      <Router>
        <>
          <Dashboard />
           
        </>
      </Router>
      </ApolloProvider>
    );
  }

export default App;
