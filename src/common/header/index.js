import React from "react";
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
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };
  }

  hanldeInputFocus = () => {
    this.setState({ focused: true });
  };
  hanldeInputBlur = () => {
    this.setState({ focused: false });
  };

  render() {
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
                in={this.state.focused}
                timeout={1000}
                classNames="slide"
              >
                <NavSearch
                  className={this.state.focused ? "focused" : ""}
                  onFocus={this.hanldeInputFocus}
                  onBlur={this.hanldeInputBlur}
                />
              </CSSTransition>
              <Icon
                className={
                  this.state.focused
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
}

export default Header;
