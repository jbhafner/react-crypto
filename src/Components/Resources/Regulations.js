import React, { Component } from "react";
// import gavel from './resourcesimages/gavel.png';
import regulation from './resourcesimages/regulation.jpg';
// import tags from './resourcesimages/tags.jpg';
// import wetrust from './resourcesimages/wetrust.jpg';


class Regulations extends Component {
  render() {
    return (
      <div className="regulations">

          <h1><center>How the U.S. and the world regulate bitcoin & 
          other cryptocurrencies</center></h1>
          
          <div class="wrap">
            <div class="reg">
              <div class="feat-img"><img src={regulation} alt={"tags"} height="800" width="600"/></div>
              <section>
                <header>
                  <h3>Regulators all over the world have begun to address the 
                  challenges presented by virtual currencies that mostly bypass regulated banks, 
                  financial firms, exchanges and central clearinghouses.</h3>
                </header>
                  <p>Because the current players in virtual currencies including the most popular 
                  bitcoin BTCUSD, +2.31% BTCF8, +2.83%    largely operate outside of the conventional 
                  financial system, regulators are concerned about money laundering, terrorist 
                  financing, tax evasion and fraud.</p>  
               
                  <p>Bitcoin is a famously dececentralized cryptocurrency, a system of storing value, 
                  and a somewhat less-effective transaction medium. It allows near-instantaneous 
                  transfers all over the world without a middle man or regulatory body giving it the 
                  go-ahead. Fans of cryptocurrency fear government regulation could ruin it, but they 
                  shouldn’t be concerned. Any attempt control bitcoin simply won’t work.
                  Beyond the difficulties presented by the decentralization of bitcoin itself, 
                  governments and regulatory bodies have shown they lack understanding of technological 
                  topics, and bitcoin is one of the most complex. As governments struggle to ban technologies 
                  like Tor and encryption, it seems impossible to imagine them gaining the ability to truly 
                  impact bitcoin – and its alt-coin contemporaries – in a way that could impede its progress.</p>
                
                
                  <p>Bitcoin is not linked to any territory or financial institution. There are tens of popular 
                  exchanges, and even if there weren’t, all you need are wallets and a network connection to 
                  be able to conduct bitcoin transactions. The blockchain it’s built upon does not require any 
                  one institution to operate it, and indeed is the complete antithesis of such an idea, 
                  operating as a public ledger rather than a private one.</p>    
              </section>
            </div>
          </div>  

          


          
      </div>
    );
  }
}

export default Regulations;
