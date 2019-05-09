import React from "react";
import { connect } from "react-redux";
import { WriterWrapper, WriterTop, WriterItem } from "../style";

class Writer extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <WriterWrapper>
        <WriterTop>
          <div className="title">推荐作者</div>
          <div className="shuxin">
            <i className="iconfont icon-shuaxin" />
            换一批
          </div>
        </WriterTop>
        {list.map((item) => {
          return (
            <WriterItem key={item.get("id")}>
              <img src={item.get("imgUrl")} alt="" className="avatar" />
              <div className="box">
                <div className="name">{item.get("name")}</div>
                <div className="info">{item.get("info")}</div>
              </div>
              <div className="watch">
                <i className="iconfont icon-hao" />
                关注
              </div>
            </WriterItem>
          );
        })}
      </WriterWrapper>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(["home", "writerList"])
});

export default connect(mapState)(Writer);
