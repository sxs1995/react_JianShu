import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";
import {
  HeaderWrapper,
  WidthLimit,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfotitle,
  SearchWrapper,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
  Addtion,
  Btn,
  Icon
} from "./style";

class Header extends React.Component {
  getListArea = () => {
    const {
      focuse,
      list,
      page,
      handleMouseEnter,
      handleMouseLeave
    } = this.props;
    const newList = list.toJS();
    const pageList = [];
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      pageList.push(
        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
      );
    }
    if (focuse) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfotitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfotitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  };

  render() {
    const { focuse, hanldeInputFocus, hanldeInputBlur } = this.props;
    return (
      <HeaderWrapper>
        <WidthLimit>
          <Logo href="" />
          <Nav>
            <NavItem className="left active">
              <Icon className="iconfont icon-zhinan" />
              首页
            </NavItem>
            <NavItem className="left">
              <Icon className="iconfont icon-shoujixiazai" />
              下载App
            </NavItem>
            <NavItem className="right">登录</NavItem>
            <NavItem className="right language">
              <Icon className="iconfont icon-Aa" />
            </NavItem>
            <SearchWrapper>
              <CSSTransition in={focuse} timeout={1000} classNames="slide">
                <NavSearch
                  className={focuse ? "focused" : ""}
                  onFocus={hanldeInputFocus}
                  onBlur={hanldeInputBlur}
                />
              </CSSTransition>
              <Icon
                className={
                  focuse
                    ? "iconfont icon-fangdajing icon-fangdajing2"
                    : "iconfont icon-fangdajing "
                }
              />
              {this.getListArea()}
            </SearchWrapper>
          </Nav>
          <Addtion>
            <Btn className="writting">
              <Icon className="iconfont icon-yumaobi" />
              写文章
            </Btn>
            <Btn className="reg">注册</Btn>
          </Addtion>
        </WidthLimit>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    focuse: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"])
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    hanldeInputFocus: () => {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    hanldeInputBlur: () => {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter: () => {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave: () => {
      dispatch(actionCreators.mouseLeave());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispathToProps
)(Header);
