import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import UserDetails from './pages/userDetails';
import AddUser from './pages/addUser';

export default class App extends Component {
  
  
  render() {
    return (
      <div>
        <BrowserRouter>
          
          {/* <NavigationContainer /> */}

          <Switch>
                
            <Route exact path="/" component={Home} />
            <Route exact path="/add-user" component={AddUser} />
            
            <Route
              path="/user/:slug"
              render={props => (
                <UserDetails {...props} />
              )}  
            />
          
          </Switch>
          
        </BrowserRouter>
      </div>
    );
  }
}