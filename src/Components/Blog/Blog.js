import React, { Component } from "react";
import "./blog.css";
import bitCoinAnonymity from "./blogImages/bitcoin-anonymity.png";
import bitCoinExchange from "./blogImages/bitcoin-exchange.png";
import bitCoinTop from "./blogImages/bitcoin-top.gif";
import bitCoinUnknown from "./blogImages/bitcoin-unknown.png";
import bitCoinWhy from "./blogImages/bitcoin-why.png";
import wallet2 from "./blogImages/wallet2.png";

class Blog extends Component {
  render() {
    return (
      <div>
        <h1>Current Cryptocurrency News</h1>

        <div className="wrap">
          <div className="post">
            <div className="feat-img">
              <img src={bitCoinTop} alt={"coin"} height="120" width="120" />
            </div>
            <section>
              <header>
                <h2>What is Bitcoin?</h2>
              </header>
              <br />
              <blockquote>
                Bitcoin is a new currency that was created in 2009 by an unknown
                person using the alias Satoshi Nakamoto. Transactions are made
                with no middle men – meaning, no banks! Bitcoin can be used to
                book hotels on Expedia, shop for furniture on Overstock and buy
                Xbox games. But much of the hype is about getting rich by
                trading it. The price of bitcoin skyrocketed into the thousands
                in 2017.
              </blockquote>

              <p>
                <a
                  href="https://www.coindesk.com/information/what-is-bitcoin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="more-link"
                >
                  Read More
                </a>
              </p>
            </section>
          </div>
        </div>

        <div className="wrap">
          <div className="post">
            <div className="feat-img">
              <img src={bitCoinWhy} alt="coin" height="120" width="120" />
            </div>
            <article>
              <header>
                <h2>Why BitCoin?</h2>
              </header>
              <br />
              <blockquote>
                Bitcoins can be used to buy merchandise anonymously. In
                addition, international payments are easy and cheap because
                bitcoins are not tied to any country or subject to regulation.
                Small businesses may like them because there are no credit card
                fees. Some people just buy bitcoins as an investment, hoping
                that they’ll go up in value.
              </blockquote>

              <p>
                <a
                  href="https://support.coinbase.com/customer/portal/articles/1824913-why-would-i-use-bitcoin-why-should-i-use-bitcoin-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="more-link"
                >
                  Read More
                </a>
              </p>
            </article>
          </div>
        </div>

        <div className="wrap">
          <div className="post">
            <div className="feat-img">
              <img src={bitCoinExchange} alt="coin" height="120" width="120" />
            </div>
            <article>
              <header>
                <h2>Acquiring Bitcoins</h2>
              </header>
              <br />
              <blockquote>
                Buy on an Exchange. Many marketplaces called “bitcoin exchanges”
                allow people to buy or sell bitcoins using different currencies.
                Coinbase is a leading exchange, along with Bitstamp and
                Bitfinex. But security can be a concern: bitcoins worth tens of
                millions of dollars were stolen from Bitfinex when it was hacked
                in 2016.
              </blockquote>
              <blockquote>
                Transfers People can send bitcoins to each other using mobile
                apps or their computers. It’s similar to sending cash digitally.
              </blockquote>
              <blockquote>
                Mining People compete to “mine” bitcoins using computers to
                solve complex math puzzles. This is how bitcoins are created.
                Currently, a winner is rewarded with 12.5 bitcoins roughly every
                10 minutes.
              </blockquote>

              <a
                href="https://www.coindesk.com/information/how-can-i-buy-bitcoins/"
                className="more-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </article>
          </div>
        </div>

        <div className="wrap">
          <div className="post">
            <div className="feat-img">
              <img src={wallet2} alt="coin" height="120" width="120" />
            </div>
            <article>
              <header>
                <h2>Owning Bitcoins and Your Digital Wallet</h2>
              </header>
              <br />
              <blockquote>
                Bitcoins are stored in a “digital wallet,” which exists either
                in the cloud or on a user’s computer. The wallet is a kind of
                virtual bank account that allows users to send or receive
                bitcoins, pay for goods or save their money. Unlike bank
                accounts, bitcoin wallets are not insured by the FDIC.
              </blockquote>
              <blockquote>
                Wallet in cloud: Servers have been hacked. Companies have fled
                with clients’ Bitcoins.
              </blockquote>
              <blockquote>
                Wallet on computer: You can accidentally delete them. Viruses
                could destroy them.
              </blockquote>

              <a
                href="https://money.usnews.com/investing/investing-101/articles/2017-11-06/best-bitcoin-wallet-of-2018"
                target="_blank"
                rel="noopener noreferrer"
                className="more-link"
              >
                Read More
              </a>
            </article>
          </div>
        </div>

        <div className="wrap">
          <div className="post">
            <div className="feat-img">
              <img src={bitCoinAnonymity} alt="coin" height="120" width="140" />
            </div>
            <article>
              <header>
                <h2>Anonymity</h2>
              </header>
              <br />
              <blockquote>
                Though each bitcoin transaction is recorded in a public log,
                names of buyers and sellers are never revealed – only their
                wallet IDs. While that keeps bitcoin users’ transactions
                private, it also lets them buy or sell anything without easily
                tracing it back to them. That’s why it has become the currency
                of choice for people online buying drugs or other illicit
                activities.
              </blockquote>

              <a
                href="https://www.technologyreview.com/s/608716/bitcoin-transactions-arent-as-anonymous-as-everyone-hoped/"
                target="_blank"
                rel="noopener noreferrer"
                className="more-link"
              >
                Read More
              </a>
            </article>
          </div>
        </div>

        <div className="wrap">
          <div className="post">
            <div className="feat-img">
              <img src={bitCoinUnknown} alt="coin" height="100" width="100" />
            </div>
            <article>
              <header>
                <h2>Future in question</h2>
              </header>
              <br />
              <blockquote>
                No one knows what will become of bitcoin. It is mostly
                unregulated, but some countries like Japan, China and Australia
                have begun weighing regulations. Governments are concerned about
                taxation and their lack of control over the currency.
              </blockquote>

              <a
                href="https://www.cnbc.com/2017/12/01/james-altuchers-bitcoin-predictions.html"
                target="_blank"
                rel="noopener noreferrer"
                className="more-link"
              >
                Read More
              </a>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
