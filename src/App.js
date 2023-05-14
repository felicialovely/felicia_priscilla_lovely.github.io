import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { enquireScreen } from 'enquire-js';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import './styles/index.less';

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
    if (window.location.hostname === 'felicialovely.github.io') window.location.href = 'https://www.felicialovely.netlify.app';

    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
