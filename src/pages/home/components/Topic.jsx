import React from "react";
import { TopicWrapper, TopicItem } from "../style";

class Topic extends React.Component {
  render() {
    return (
      <TopicWrapper>
        <TopicItem>
          <img
            src="https://upload.jianshu.io/admin_banners/web_images/4658/ef2cf6b3478da3cb7482f228212ecb59603fd408.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt=""
            className="topic-pic"
          />
          item
        </TopicItem>
      </TopicWrapper>
    );
  }
}

export default Topic;
