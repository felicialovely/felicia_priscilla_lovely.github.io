/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Navigation from '@components/Navigation';
import ProfileIntro from './ProfileIntro';
import WorkingExperience from './WorkingExperience';
import ContactMe from '@components/ContactMe';
import Footer from '@components/Footer';

import {
  NavDataSource,
  ProfileDataSource,
  WorkingExperienceDataSource,
  ContactDataSource,
  FooterDataSource,
} from '../../libraries/data.source';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Profile extends React.Component {
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
      <ProfileIntro
        id="profile"
        key="profile"
        dataSource={ProfileDataSource}
        isMobile={this.state.isMobile}
      />,
      <WorkingExperience
        id="working-experience"
        key="working-experience"
        dataSource={WorkingExperienceDataSource}
        isMobile={this.state.isMobile}
      />,
      <ContactMe
        id="contact-me"
        key="contact-me"
        dataSource={ContactDataSource}
        isMobile={this.state.isMobile}
      />,
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
