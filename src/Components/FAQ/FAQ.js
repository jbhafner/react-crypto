import React, { Component } from "react";

class FAQ extends Component {
  state = { showing: null };

  // { showing: 2 };

  handleClick = (id) => {
    this.setState({ showing: id })
  }

  render() {
    const { showing } = this.state;
    return (
      <div>

            <div class="wrapper">

              <h1>
                <center> Frequently Asked Questions </center>
              </h1>

              <div>
                <p class="faq-question" onClick={() => this.handleClick(1)}>How do I change my password?</p>
                { this.state.showing === 1 
                  ? <p class="faq-answer">
                    I like the idea of adding new and old to a minimalist approach. I
                    love using white with pops of brighter colors.{" "}
                    </p>
                  : null
                }    
                <br />
                <p class="faq-question" onClick={() => this.handleClick(2)}>How do I search for a currency?</p>
                { this.state.showing === 2
                  ? <p class="faq-answer">
                    Wonder Woman
                    </p>
                  : null
                }    
                <br />
                <p class="faq-question" onClick={() => this.handleClick(3)}>How do I change my default currency?</p>
                {this.state.showing === 3
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
