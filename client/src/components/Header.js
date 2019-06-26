import React, { Component } from 'react';
import Nav from "./Nav";

class Header extends Component {
  render() {
    return (
     
      <header>
      <Nav/>
        <div className="head">
            <h1>PAY BILLS,< br/>WITHOUT STRUGGLE </h1>
            <div>
              <p>Easy way to pay your bills online. With bill managment you can pay your bills from home. You can edit you personal page, see your evidence, subscribe to auto-pay and much more. < br/> First time in Bosnia and Herzegovina all bills in one place.</p>
            </div>
        </div>
      </header>
      
    );
  }
}

export default Header;