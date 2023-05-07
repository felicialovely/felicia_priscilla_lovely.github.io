/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Navigation from '@components/Navigation';
import Banner from './components/Banner';
import Intro from './components/Intro';
import Knowledge from './components/Knowledge';
import Portfolio from './components/Portfolio';
import ContactMe from '@components/ContactMe';
import Footer from '@components/Footer';

import {
  NavDataSource,
  BannerDataSource,
  IntroDataSource,
  KnowledgeDataSource,
  PortfolioDataSource,
  ContactDataSource,
  FooterDataSource,
} from '../../libraries/data.source';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
    this.targetRef = React.createRef();
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  goToIntro = () => {
    this.targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  render() {
    const children = [
      <Navigation
        id="nav"
        key="nav"
        dataSource={NavDataSource}
        selected="home"
        isMobile={this.state.isMobile}
      />,
      <Banner
        id="banner"
        key="banner"
        dataSource={BannerDataSource}
        isMobile={this.state.isMobile}
        onButtonClick={this.goToIntro}
      />,
      <Intro
        id="intro"
        key="intro"
        targetRef={this.targetRef}
        dataSource={IntroDataSource}
        isMobile={this.state.isMobile}
      />,
      <Knowledge
        id="knowledge"
        key="knowledge"
        dataSource={KnowledgeDataSource}
        isMobile={this.state.isMobile}
      />,
      <Portfolio
        id="portfolio"
        key="portfolio"
        dataSource={PortfolioDataSource}
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
