import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Component 
import BookList from './components/BookList';
import AddBook from './components/AddBook';

// Apollo Client Set Up
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

class App extends Component {
    render(){
      return (
        <ApolloProvider client={client}>
          <div id="main"> 
            <h1>DevHak Reading List</h1>
            <BookList />
            <AddBook />
          </div>
        </ApolloProvider>
      )
    }
}

export default App;