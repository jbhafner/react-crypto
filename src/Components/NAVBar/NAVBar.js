import React from 'react';
import AppBar from 'material-ui/AppBar';
// import Paper from 'material-ui/Paper';
// import Menu from 'material-ui/Menu';
// import MenuItem from 'material-ui/MenuItem'
// import FlatButton from 'material-ui/FlatButton';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
// console.log('NAVBar.js called') 
// const NAVBar = () => (
//   <AppBar
//     title="Crypto Tracker"  
//     iconClassNameRight="muidocs-icon-navigation-expand-more"

//   />
// );

<div className="App">
  <div className="logo">
    <AppBar
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      style={{ position: "fixed", top: 0 }}
      title={<img src={silverCoin} alt="logo" width="25px" height="25" />}
      onLeftIconButtonClick={this.handleToggle}
    />
  </div>

  <div className="banner">
    <img src={cryptoLogo} alt="CryptoLogo" width="100%" height="200px" />
  </div>

  <Drawer
    docked={false}
    width={200}
    open={this.state.open}
    onRequestChange={open => this.setState({ open })}
  >
    <AppBar title="CT" />
    <MenuItem onClick={this.showHome}>Home</MenuItem>
    <MenuItem onClick={this.showAddCoins}>My Coins</MenuItem>
    <MenuItem onClick={this.showBlog}>Blog</MenuItem>
    <MenuItem
      primaryText="Resources"
      rightIcon={<ArrowDropRight />}
      menuItems={[
        <MenuItem
          onClick={this.showRegulations}
          primaryText="Regulations"
        />,
        <MenuItem
          onClick={this.showXBT_FV}
          primaryText="Bitcoin Futures Fair Value Calculator"
        />,
        <MenuItem
          onClick={this.showFVArticle}
          primaryText="Trading Bitcoin Futures"
        />
      ]}
    />

    <MenuItem onClick={this.showFAQ}>FAQ</MenuItem>
    <MenuItem onClick={this.showContact}>Contact</MenuItem>
  </Drawer>

  <Button color="inherit">Login</Button>

export default NAVBar;