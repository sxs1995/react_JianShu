import React from "react";
import { ListItem, ListInfo } from "../style";
import { connect } from "react-redux";
class List extends React.Component {
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
                </ListInfo>
              </ListItem>
            );
          } else {
            return (
              <ListItem key={item.get("id")}>
                <ListInfo>
                  <div className="title">{item.get("title")}</div>
                  <div className="desc">{item.get("desc")}</div>
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

export default connect(mapState)(List);
