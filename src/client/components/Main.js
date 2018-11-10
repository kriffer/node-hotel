import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { Header } from './Header';
import { Home } from './Home';
import { News } from './News';
import { Blog } from './Blog';
import { Room } from './Room';
import { Admin } from './Admin';
import { RoomList } from './RoomList';
import { Activities } from './Activities';
import { Container } from 'semantic-ui-react';
import LoginForm from './LoginForm';


export class Main extends Component{



  render() {
    return (
       
         
        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/blog" component={Blog} />
          <Route path="/rooms" component={RoomList} />
          <Route path="/activities" component={Activities} />
          <Route path="/room" component={Room} />
          <Route path="/admin" component={LoginForm} />
          
        </Switch>
 
    );
  }
}
