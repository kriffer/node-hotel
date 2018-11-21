import React, { Component } from 'react';
import { Sticky } from 'semantic-ui-react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import 'semantic-ui-css/semantic.min.css';
 
 

class App extends Component {
  render() {
    return (
      
      <div>
        <Sticky>
          <Header />
        </Sticky>
        <Main />
        <Footer />
      </div>
 
    );
  }
}

export default App;
