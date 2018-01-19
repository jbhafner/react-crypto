import React, { Component } from "react";
import Paper from "material-ui/Paper";

const paperStyle = {
  height: "85%",
  width: "85%",
  margin: "7%",
  textAlign: "center",
  display: "inline-block"
};


class FvArticle extends Component {
  render() {
    return (
      <div>
        <Paper style={paperStyle} zDepth={5}>
          <h1>Bitcoin Futures Explained</h1>

          <blockquote>
            The CBOE and CME in Chicago recently released Bitcoin futures
            contracts. A futures contract is a “derivative” product because the
            contract derives its value from an underlying instrument – in this
            case the Bitcoin itself. Generally, futures traders speak of the
            futures contract, and cash, with cash meaning the actual underlying
            instrument. To avoid confusion, I will use BTC to refer to the
            underlying Bitcoin itself as the cash instrument. Please note that
            this has nothing to do with “Bitcoin Cash – BCH” which is a newly
            created coin that was spun off from the original Bitcoin (BTC). I will
            refer to the Bitcoin futures as XBT, which is the CBOE code for their
            Bitcoin futures contract. Other derivative products include options,
            warrants and convertible bonds. The notorious mortgage-backed
            Securities(MBS), collateralize debt obligations (CDOs) and credit
            default swaps (CDS) that led to the financial crisis in 2008 are also
            derivatives. With MBS, CDO, and CDS products, the buyer has
            “counter-party risk”, meaning that if the issuer has financial
            difficulties, the buyer could lose all their money. However, Bitcoin
            futures(XBT) are traded on a centralized exchange that take on the
            role as counter-party and assures settlement of the contracts.
          </blockquote>

          <blockquote>
          	There three broad types of people in the futures markets – investors, speculators, and arbitrageurs.  Generally, investors use futures contracts to reduce risk.  Speculators take on risk in an attempt to make a profit.  Speculators are an integral part of the system, as they take on risk that the investors are trying to hedge.  Arbitrageurs make short-term trades in order to profit from mispricing between BTC and XBT (more on this below).  Arbitrageurs add liquidity to the market.
          </blockquote>

          <blockquote>
          		An investor might sell one XBT to hedge their holdings of one BTC from a drop in value.  In the example here from 12/13/17, the CBOE 1/17/18 XBT contract closed at $18,020.  For illustration and simplicity, let’s assume that BTC=XBT=$18,020 price on 12/13/17. On January 17th, when this contact expires, if the BTC is trading at $17,000, then the investor would have lost $1,200 on one BTC, but they would have made $1,200 on XBT.   Thus protecting themselves from the loss.  If BTC had traded at $19,000 on the final day of trading, then the investor would have made $800 on BTC, but lost $800 on XBT. If an investor “hedges” in this way, they protect themselves from downside risk, but it also prevents then from gaining on the upside. 
          </blockquote>

          <blockquote>
          		A speculator, on the other hand, trades simply based on expected movements of the futures in order to make a profit (often short-term).  The speculator might use charts or other technical means of analyzing market movements in order to determine trade entry and exit.  
          </blockquote>

          <blockquote>
          		Arbitrage trading is another type of trading.  Unlike investors, they are not trading to hedge position, but since they buy and sell BTC and XBT simultaneously, their trades are generally hedged, and minimal risk. Arbitrageurs trade to make profits based on mis-pricing between BTC and XBT.  In order to make these trades, the trader will determine the “fair value” of XBT.  Fair value is not a prediction of which way the XBT price heading; rather, it is a calculation of the cost of buying and holding a BTC until the expiry of the current XBT.  Most speculators will be using borrowed money to buy and hold BTC, so I assume a borrowing cost, called the cost of carry.  The spot price BTC – cost of carry = fair value. You can then compare fair value to the futures.  Normally the fair value would be slightly less than BTC because of the “cost of carry”.  But Bitcoin, like many crypto-currencies does not necessarily follow normal trading patterns.
          </blockquote>

          <blockquote>
          		In the sample I have on our Bitcoin Futures Fair Value Calculator, using data as of 12/13/17, the fair value is $17,426.81, and XBT closed at $18,020.  In this case there is a $593.19 spread, with the futures contract exceeding the fair value.  Because the contract is new, there is still a very wide mis-pricing, creating opportunities for arbitrage traders.  In this case, a trader could have locked in a $593.41 profit by buying one BTC @ 17,382.19, and selling one XBT.  As the market matures, I would expect the spreads to narrow considerably as more traders enter the market.
          </blockquote>                

          <blockquote>
          		This is for informational purposes only.  You should not attempt these trades unless you are an experienced investor.
          </blockquote>
        </Paper>   

      </div>
    );
  }
}

export default FvArticle;
