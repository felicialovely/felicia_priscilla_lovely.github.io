/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";

import Navigation from "@components/Navigation";
import ContactForm from "./components/ContactForm";
import Footer from "@components/Footer";

import { NavDataSource, FooterDataSource } from "../../libraries/data.source";

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== "undefined" ? window : {};

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port,
    };
  }

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    if (location.port) {
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
  }

  render() {
    const children = [
      <Navigation
        id="nav"
        key="nav"
        dataSource={NavDataSource}
        selected="profile"
        isMobile={this.state.isMobile}
      />,
      <ContactForm />,
      <Footer
        id="footer"
        key="footer"
        dataSource={FooterDataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {this.state.show && children}
      </div>
    );
  }
}
