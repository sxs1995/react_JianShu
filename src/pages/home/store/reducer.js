import { fromJS } from "immutable";

const defaultState = fromJS({
  articleList: [
    {
      id: 1,
      title: "我们经常用的Loading动画居然还有这种姿势",
      desc:
        "背景 Loading动画几乎每个Android App中都有。 一般在需要用户等待的场景，显示一个Loading动画可以让用户知道App正在加...",
      imgUrl: ""
    },
    {
      id: 2,
      title: "“一个人开始废掉的3种迹象”",
      desc:
        "有句话说，永远不要小看一个过年还能瘦的人。 刘涛大年初四还在坚持健身，挑战十公里。 优秀的人，即使假期也不降低对自己的要求和标准。 对于大多数人...",
      imgUrl:
        "https://upload-images.jianshu.io/upload_images/12420489-6130003cf866c978?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 3,
      title: "鸡胸肉——无烤箱版 每天早餐不重样",
      desc:
        "工作日早餐分享： 主食：鸡胸肉 小菜：蔬菜沙拉 饮品：每天不变的蜂蜜水     南瓜牛奶鸡蛋羹 准备食材： 食材A：鸡胸肉、黑胡椒、白胡椒、葱、...",
      imgUrl:
        "https://upload-images.jianshu.io/upload_images/13841701-96ba3da37cded39d?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    }
  ],
  recommendList: [
    {
      id: 1,
      imgUrl:
        "https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
    },
    {
      id: 2,
      imgUrl:
        "https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
    },
    {
      id: 3,
      imgUrl:
        "https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
    },
    {
      id: 4,
      imgUrl:
        "https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
    }
  ],
  writerList: [
    {
      id: 1,
      imgUrl:
        "https://upload.jianshu.io/users/upload_avatars/8972166/2a0fb78d-6417-47cb-a57c-2ce4a7b92609.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
      name: "冰千里",
      info: "写了485.7k字 · 8.6k喜欢"
    },
    {
      id: 2,
      imgUrl:
        "https://upload.jianshu.io/users/upload_avatars/2587459/0c7e061f-e78e-4b09-b511-340846c4ea0f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
      name: "穿着prada挤地铁",
      info: "写了485.7k字 · 8.6k喜欢"
    }
  ]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
