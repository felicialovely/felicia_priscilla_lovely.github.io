import React from "react";
import TweenOne from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import * as AntdIcons from "@ant-design/icons";

class Footer extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    return (
      <div {...props} {...dataSource.wrapper}>
        <OverPack {...dataSource.OverPack}>
          <TweenOne {...dataSource.links}>
            {dataSource.links.children.map((item, i) => {
              const Icon = AntdIcons[item.children];
              return (
                <a key={i.toString()} {...item}>
                  <Icon />
                </a>
              );
            })}
          </TweenOne>
          <div {...dataSource.copyright}>
            {dataSource.copyright.children.map((item, i) =>
              React.createElement(
                "div",
                { key: i.toString(), ...item },
                item.children
              )
            )}
          </div>
        </OverPack>
      </div>
    );
  }
}

export default Footer;
