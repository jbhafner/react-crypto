import React, { Component } from "react";

class FAQ extends Component {
  state = { showing: null };

  // { showing: 2 };

  handleClick = id => {
    this.setState({ showing: id });
  };

  render() {
    // const { showing } = this.state;
    return (
      <div>
        <div class="wrapper">
          <h1>
            <center> Frequently Asked Questions </center>
          </h1>

          <div>
            <p className="faq-question" onClick={() => this.handleClick(1)}>
              How do I update my coin values?
            </p>
            {this.state.showing === 1 ? (
              <p class="faq-answer">
                To update your default coin values, hit the UPDATE button on the
                bottom of home page.{" "}
              </p>
            ) : null}
            <br />
            <p class="faq-question" onClick={() => this.handleClick(2)}>
              How do I add more currencies to track?
            </p>
            {this.state.showing === 2 ? (
              <p class="faq-answer">
                Go to Add Coins in navbar. Scroll through the available coins.
                Click the coins you want to add to your Home page.
              </p>
            ) : null}
            <br />
            <p class="faq-question" onClick={() => this.handleClick(3)}>
              How do I change my password?
            </p>
            {this.state.showing === 3 ? (
              <p class="faq-answer">
                Go to settings page and choose Change Password.
              </p>
            ) : null}
            <br />
            <p class="faq-question" onClick={() => this.handleClick(4)}>
              Can I submit a blog for CryptoTracker?
            </p>
            {this.state.showing === 4 ? (
              <p class="faq-answer">
                Yes! We are always interested in great content. Contact us via
                our Contact Us page.
              </p>
            ) : null}
            <br />
            <p class="faq-question" onClick={() => this.handleClick(5)}>
              How do I use the calculator?
            </p>
            {this.state.showing === 5 ? (
              <p class="faq-answer">
                Fill in the values in each field and hit CALCULATE.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default FAQ;
