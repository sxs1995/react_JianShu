import styled from "styled-components";
import logoPic from '../../statics/logo.png'
export const HeaderWrapper = styled.div `
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;
export const WidthLimit = styled.div `
  min-width: 768px;
  height:56px;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
`;

export const Logo = styled.a `
  height: 56px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size:contain;
`;

export const Icon = styled.i `
  margin-right:2px;
  font-size:18px;
  &.icon-Aa{
    font-size:22px;
  }
  &.icon-fangdajing{
    position:absolute;
    right:3px;
    width:30px;
    line-height:30px;
    bottom: 3.5px;
    text-align:center;
    border-radius:50%;
  }
  &.icon-fangdajing2 {
    background:#777;
    color: #fff;
    }
`;

export const Nav = styled.div `
  width:960px;
  height:100%;
  margin:0 auto;
`
export const NavItem = styled.div `
  height:100%;
  line-height:56px;
  padding:0 15px;
  font-size:17px;
  color:#333;
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color:#969696;
  }
  &.language{
    font-weight:500;
  }
  &.active{
    color:#ea6f5a;
  }
`
// eslint-disable-next-line
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})
`
  width:160px;
  height:36px;
  margin-top:9px;
  padding:0 30px 0 20px;
  border:none;
  margin-left:20px;
  box-sizing:border-box;
  outline:none;
  font-size:14px;
  border-radius:19px;
  background:#eee;
  color: #666;
  /* transition:all 0.5s ease; */
  &::placeholder{
    color: #999;
  }
  &.focused{
    width:240px;
  }
`

export const Addtion = styled.div `
  position:absolute;
  right:0;
  top: 0;
`
export const SearchWrapper = styled.div `
  float:left;
  position:relative;
  .slide-enter{
    width:160px;
    transition:all .5s ease-out;
  }
  .slide-enter-active{
    width:240px;
  }
  .slide-exit{
    transition: all .5s ease-out;
  }
  .slide-exit-active {
    width: 160px;
  }
`

export const Btn = styled.div `
  float:right;
  margin-top:9px;
  margin-right:20px;
  padding:0 20px;
  line-height:37px;
  border-radius:19px;
  border:1px solid #ea6109;
  cursor: pointer;
  font-size:14px;
  transition: .1s ease-in ;
  &.reg{
    color: #ec6149;
  }
  &.reg:hover{
        color: #ec6149;
        border-color: #ec6149;
        background-color: rgba(236, 97, 73, .05);
  }
  &.writting{
    color: #fff;
    background: #ea6f5a;
  }
  &.writting:hover{
    color: #fff;
    background-color: #ec6149;
  }
`