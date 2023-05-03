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
  Content10DataSource,
  IntroDataSource,
  KnowledgeDataSource,
  PortfolioDataSource,
  FooterDataSource,
} from '../../libraries/data.source';
import './less/antMotionStyle.less';

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
        id="Nav3_0"
        key="Nav3_0"
        dataSource={NavDataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner
        id="banner_0"
        key="banner_0"
        dataSource={BannerDataSource}
        isMobile={this.state.isMobile}
        onButtonClick={this.goToIntro}
      />,
      <Intro
        id="Content1_0"
        key="Content1_0"
        targetRef={this.targetRef}
        dataSource={Content10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Knowledge
        id="Content3_0"
        key="Content3_0"
        dataSource={IntroDataSource}
        isMobile={this.state.isMobile}
      />,
      <Portfolio
        id="Content5_0"
        key="Content5_0"
        dataSource={KnowledgeDataSource}
        isMobile={this.state.isMobile}
      />,
      <ContactMe
        id="Content11_0"
        key="Content11_0"
        dataSource={PortfolioDataSource}
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
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
