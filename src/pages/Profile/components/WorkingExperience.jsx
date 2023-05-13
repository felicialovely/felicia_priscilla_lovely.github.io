import React from "react";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import QueueAnim from "rc-queue-anim";
import { getChildrenToRender } from "../../../libraries/utils";
import { BorderOutlined } from "@ant-design/icons";

class WorkingExperience extends React.PureComponent {
  getBlockChildren = (block, i) => {
    const { isMobile } = this.props;
    const item = block.children;

    const textContent = (
      <>
        <div key="time" {...item.time}>
          {item.time.children}
        </div>
        <h2 key="title" {...item.title}>
          <BorderOutlined className="block-icon" />
          {item.title.children}
        </h2>
        <div key="p" {...item.content}>
          {item.content.children}
        </div>
      </>
    );

    const textWrapper = isMobile ? (
      <div key="text" {...item.textWrapper}>
        {textContent}
      </div>
    ) : (
      <QueueAnim
        key="text"
        leaveReverse
        delay={isMobile ? [0, 100] : 0}
        {...item.textWrapper}
      >
        {textContent}
      </QueueAnim>
    );

    const imgContent = (
      <>
        <div key="image" {...item.img}>
          <img src={item.img.children} alt="img" />
        </div>
        <div key="name" className="name-wrapper">
          <div key="name" {...item.name}>
            {item.name.children}
          </div>
          <div key="post" {...item.post}>
            {item.post.children}
          </div>
        </div>
      </>
    );

    return (
      <OverPack key={i.toString()} {...block}>
        {isMobile ? (
          <div className="image-wrapper" key="image" {...item.imgWrapper}>
            {imgContent}
          </div>
        ) : (
          <QueueAnim
            className="image-wrapper"
            key="image"
            type={isMobile ? "right" : "bottom"}
            leaveReverse
            delay={isMobile ? [100, 0] : 0}
            {...item.imgWrapper}
          >
            {imgContent}
          </QueueAnim>
        )}

        {textWrapper}
      </OverPack>
    );
  };

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const children = dataSource.block.children.map(this.getBlockChildren);
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <div {...dataSource.titleWrapper}>
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </div>
          <div {...dataSource.block}>{children}</div>
        </div>
      </div>
    );
  }
}

export default WorkingExperience;
