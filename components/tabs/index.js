// components/tab/index.js
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: Array,
    activeKey: String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    _activeKey: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _onTabClick(options){
      const { key } = options.currentTarget.dataset;
      const {_activeKey}=this.data;
      console.log(key, _activeKey)
      if (key !== _activeKey){
        this.setData({
          _activeKey: key
        })
        this.triggerEvent('click', { activeKey: key})
      }
    }
  },
  attached: function () {
    const { tabs, activeKey}=this.properties;
    if (activeKey){
      this.setData({
        _activeKey: activeKey
      })
    }else{
      if (tabs) {
        this.setData({
          _activeKey: tabs[1].key
        })
      }
    }
  },
})
