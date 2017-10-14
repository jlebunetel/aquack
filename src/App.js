import React, { Component } from 'react';

import Culture from "./components/Culture";
import Footer from "./components/Footer";
import Titre from "./components/Titre";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Titre />
        <Culture />
        <br/>
        <Footer />
      </div>
    );
  }
}

export default App;
