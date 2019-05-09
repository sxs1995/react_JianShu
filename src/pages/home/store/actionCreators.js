import * as actionTypes from "./actionTypes";
import axios from "axios";

const homedata = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  recommendList: result.recommendList,
  articleList: result.articleList,
  writerList: result.writerList
});

export const getHomeData = () => {
  return (dispatch) => {
    axios
      .get("/api/home.json")
      .then((res) => {
        console.log(res);
        let result = res.data.data;
        dispatch(homedata(result));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
