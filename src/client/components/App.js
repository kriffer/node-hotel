import React, { Component } from 'react';

import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import 'semantic-ui-css/semantic.min.css';
import {
  Sticky
} from "semantic-ui-react";

class App extends Component {
  state = { context: null }
  render() {

    return (
      <div>

        <Sticky context={this.state.context}>
          <Header />
        </Sticky>
        <Main />
        <Footer />


      </div>

    );
  }
}

export default App;
