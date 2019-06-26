import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <main>

<section className="intro">
            <h2>What we offer?</h2>
        </section>

        <div>
             <div className="services">
                <div className="service-one">
                <p className="service-icon"><i className="payment"></i></p>
                <p className="service-title">Payment</p>
                <p>Manage your payments anytime, anywhere, lightning fast.</p>
                </div>
                <div className="service-two">
                <p className="service-icon"><i className="evidence"></i></p>
                <p className="service-title">Evidence</p>
                <p>Always have full insight in your history.</p>
            
                </div>
                <div className="service-three">
                <p className="service-icon"><i className="connected"></i></p>
                <p className="service-title">Connected</p>
                <p>Connected with all companies.</p>
              
          </div>
        </div>

            </div>

        <section>
            <h2>Our Idea</h2>
            <div>
                <p>Our main goal was to create one page that is unique and easy to use. We want to offer you simple solution to pay your bills from home. In another words to manage your bills and payments and avoid standing in lines. We hope that this at least could give you idea to build page similar as this.</p>    
            </div>
        </section>
       
      </main>
    );
  }
}

export default Main;