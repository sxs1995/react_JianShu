import styled from "styled-components";

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
  .meta {
    margin-top: 10px;
    font-size: 12px;
    color: #b4b4b4;
    .jsd-meta {
      color: #ea6f5a;
      margin-right: 10px;
    }
    .iconfont {
      font-size: 12px;
      margin-right: 3px;
    }
    .nickname,
    .defalutColor {
      margin-right: 10px;
      cursor: pointer;
      transition: all ease-in 0.2s;
    }
    .nickname:hover,
    .defalutColor:hover {
      color: #787878;
    }
  }
`;

export const RecommendWrapper = styled.div`
  margin: 26px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  margin-bottom: 6px;
`;

export const WriterWrapper = styled.div`
  width: 278px;
`;
export const WriterTop = styled.div`
  width: 278px;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  color: #969696;
  .title {
    display: block;
    float: left;
  }
  .shuxin {
    display: block;
    float: right;
    .icon-shuaxin {
      font-size: 14px;
      margin-right: 2px;
    }
  }
`;

export const WriterItem = styled.div`
  display: flex;
  margin-bottom: 15px;
  .avatar {
    border-radius: 50%;
    width: 48px;
    height: 48px;
    margin-right: 10px;
  }
  .box {
    flex: 1;
    .name {
      padding-top: 5px;
      font-size: 14px;
    }
    .info {
      margin-top: 10px;
      font-size: 12px;
      color: #969696;
    }
  }
  .watch {
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
    .icon-hao {
      font-size: 12px;
    }
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
`;
