import React from "react";
import { ListItem, ListInfo } from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store";
class List extends React.Component {
  componentDidMount() {
    this.props.changeHomeData();
  }

  render() {
    const { list } = this.props;
    return (
      <div>
        {list.map((item) => {
          if (item.get("imgUrl")) {
            return (
              <ListItem key={item.get("id")}>
                <img src={item.get("imgUrl")} className="pic" alt="" />
                <ListInfo>
                  <div className="title">{item.get("title")}</div>
                  <div className="desc">{item.get("desc")}</div>
                  <div className="meta">
                    <span className="jsd-meta">
                      <i className="iconfont icon-icon-zhuanshuUdunjishu" />
                      4.8
                    </span>
                    <span className="nickname">Android开发架构</span>
                    <span className="defalutColor">
                      <i className="iconfont icon-pinglun" />2
                    </span>
                    <span>
                      <i className="iconfont icon-xin" />2
                    </span>
                  </div>
                </ListInfo>
              </ListItem>
            );
          } else {
            return (
              <ListItem key={item.get("id")}>
                <ListInfo>
                  <div className="title">{item.get("title")}</div>
                  <div className="desc">{item.get("desc")}</div>
                  <div className="meta">
                    <span className="jsd-meta">
                      <i className="iconfont icon-icon-zhuanshuUdunjishu" />
                      4.8
                    </span>
                    <span className="nickname">Android开发架构</span>
                    <span className="defalutColor">
                      <i className="iconfont icon-pinglun" />2
                    </span>
                    <span>
                      <i className="iconfont icon-xin" />2
                    </span>
                  </div>
                </ListInfo>
              </ListItem>
            );
          }
        })}
      </div>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(["home", "articleList"])
});

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeData());
  }
});

export default connect(
  mapState,
  mapDispatch
)(List);
