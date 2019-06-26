import React, { Component } from 'react';
import Header from "./Header";
import Main from "./Main";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Main />
      </div>
    );
  }
}

export default Home;