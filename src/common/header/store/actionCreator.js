import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";
import axios from "axios";

const changList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOUCS
});

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
});
export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
});
export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
});

export const getList = () => {
  return (dispatch) => {
    console.log(1111);
    axios
      .get("/api/headerList.json")
      .then((res) => {
        const data = res.data;
        console.log(data);
        dispatch(changList(data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
