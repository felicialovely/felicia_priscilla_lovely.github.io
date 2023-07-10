import React from "react";
import TweenOne from "rc-tween-one";
import { Menu } from "antd";
import { getChildrenToRender } from "../../libraries/utils";

const { Item, SubMenu } = Menu;

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneMenuOpen: false,
    };
  }

  phoneMenuClick = () => {
    this.setState({
      phoneMenuOpen: !this.state.phoneMenuOpen,
    });
  };

  render() {
    const { dataSource, isMobile, selected, ...props } = this.props;
    const { phoneMenuOpen } = this.state;
    const navData = dataSource.menu.children;
    const navChildren = navData.map((item) => {
      const { children: a, subItem, ...itemProps } = item;
      if (subItem) {
        return (
          <SubMenu
            key={item.name}
            {...itemProps}
            title={
              <div {...a} className={`header-item-block ${a.className}`.trim()}>
                {a.children.map(getChildrenToRender)}
              </div>
            }
            popupClassName="header-item-child"
          >
            {subItem.map(($item, ii) => {
              const { children: childItem } = $item;
              const child = childItem.href ? (
                <a {...childItem}>
                  {childItem.children.map(getChildrenToRender)}
                </a>
              ) : (
                <div {...childItem}>
                  {childItem.children.map(getChildrenToRender)}
                </div>
              );
              return (
                <Item key={$item.name || ii.toString()} {...$item}>
                  {child}
                </Item>
              );
            })}
          </SubMenu>
        );
      }
      return (
        <Item key={item.name} {...itemProps}>
          <a {...a} className={`header-item-block ${a.className}`.trim()}>
            {a.children.map(getChildrenToRender)}
          </a>
        </Item>
      );
    });

    return (
      <TweenOne
        component="header"
        animation={{ opacity: 0, type: "from" }}
        {...dataSource.wrapper}
        {...props}
      >
        <div
          {...dataSource.page}
          className={`${dataSource.page.className}${
            phoneMenuOpen ? " open" : ""
          }`}
        >
          <TweenOne
            animation={{ x: -30, type: "from", ease: "easeOutQuad" }}
            {...dataSource.logo}
          >
            <a href={dataSource.logo.href}>
              <img width="100%" src={dataSource.logo.children} alt="img" />
            </a>
          </TweenOne>
          {isMobile && (
            <div
              {...dataSource.mobileMenu}
              onClick={() => {
                this.phoneMenuClick();
              }}
            >
              <em />
              <em />
              <em />
            </div>
          )}
          <TweenOne {...dataSource.menu} className={phoneMenuOpen ? `${dataSource.menu.className} open` : dataSource.menu.className}>
            <Menu
              mode={isMobile ? "inline" : "horizontal"}
              defaultSelectedKeys={["home"]}
              selectedKeys={[this.props.selected]}
              theme="light"
            >
              {navChildren}
            </Menu>
          </TweenOne>
        </div>
      </TweenOne>
    );
  }
}

export default Navigation;
