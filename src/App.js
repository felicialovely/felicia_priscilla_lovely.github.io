import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { enquireScreen } from 'enquire-js';
import Header from './pages/Home/Nav0';
import Footer from './pages/Home/Footer0';
import Home from './pages/Home';
import Profile from './pages/Profile';

import {
  Nav00DataSource,
  FooterDataSource,
} from './pages/Home/data.source.js';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }
  componentDidMount() {
    // Support for mobile resolutions
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }
  render() {
    return (
      <Router>
          <Header dataSource={Nav00DataSource} isMobile={this.isMobile} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/profile" element={<Profile />} />
          </Routes>
          <Footer dataSource={FooterDataSource} isMobile={this.isMobile} />
      </Router>
    );
  }
}

export default App;