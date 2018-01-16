import React, { Component } from "react";

class FAQ extends Component {
  state = { showing: false };

  render() {
    const { showing } = this.state;
    return (
      <div>
        <div class="wrapper">

          <h1>
            <center> Frequently Asked Questions </center>
          </h1>

          <div>
            <p class="faq-question" onClick={() => this.setState({ showing: !showing})}>How do I change my password?</p>
            { showing 
              ? <p class="faq-answer">
                I like the idea of adding new and old to a minimalist approach. I
                love using white with pops of brighter colors.{" "}
                </p>
              : null
            }    
            <br />
            <p class="faq-question" onClick={() => this.setState({ showing: !showing})}>How do I search for a currency?</p>
            { showing
              ? <p class="faq-answer">
                Wonder Woman
                </p>
              : null
            }    
            <br />
            <p class="faq-question" onClick={() => this.setState({ showing: !showing})}>How do I change my default currency?</p>
            {showing 
              ? <p class="faq-answer">Relaxed, Creative, Fun.
                </p>
              : null
            }    
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default FAQ;
