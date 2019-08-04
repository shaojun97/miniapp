//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    activeKey:'todo',
    detailTabs:[
      {
        key: "todo",
        tab: "项目进度"
      },
      {
        key: "todo1",
        tab: "项目表单"
      },
    ],
    tabs:[
      {
        key: "todo",
        tab: "待办"
      },
      {
        key: "todo1",
        tab: "待办1"
      },
      {
        key: "todo2",
        tab: "待办2"
      }
    ],
    tabs: [
      {
        key: "todo",
        tab: "待办"
      },
      {
        key: "todo1",
        tab: "待办1"
      },
      {
        key: "todo2",
        tab: "待办2"
      }
    ]
  },
  onTabClick: function(options) {
    console.log(options)
  },
  onCardClick: function (options) {
    console.log(options)
  },
  onLoad: function () {
  },
})
