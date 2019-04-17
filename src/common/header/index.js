import React from "react";
import { connect } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import {
  HeaderWrapper,
  WidthLimit,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchWrapper,
  Addtion,
  Btn,
  Icon
} from "./style";

const Header = (props) => {
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
            <CSSTransition
              in={props.focuse}
              timeout={1000}
              classNames="slide"
            >
              <NavSearch
                className={props.focuse ? "focused" : ""}
                onFocus={props.hanldeInputFocus}
                onBlur={props.hanldeInputBlur}
              />
            </CSSTransition>
            <Icon
              className={
                props.focuse
                  ? "iconfont icon-fangdajing icon-fangdajing2"
                  : "iconfont icon-fangdajing "
              }
            />
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

const mapStateToProps = (state) => {
  console.log(state)
  return {
    focuse: state.focused
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    hanldeInputFocus: () => {
      const action = {
        type: 'SEARCH_FOUCS'
      }
      dispatch(action)
    },
    hanldeInputBlur: () => {
      const action = {
        type: 'SEARCH_BLUR'
      }
      dispatch(action)
    }
  };
};
export default connect(mapStateToProps, mapDispathToProps)(Header);