// components/card/index.js
Component({
  externalClasses: ["warpper-class",'hover-class'],
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    showHead: String,
    key: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    _showHead: false,
    _key: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _onClick(options) {
      const { key } = options.currentTarget.dataset;
      if (key) {
        this.triggerEvent('click', { key: key })
      }
    }
  },
  attached: function () {
    const { showHead, key } = this.properties;
    let data = {
      _showHead: false,
      _key: ''
    };
    if (key){
      data['_key']=key
    }
    if (showHead==='true') {
      data['_showHead']=true;
    } else {
      data['_showHead'] = false;
    }
    this.setData(data)
  },
})
