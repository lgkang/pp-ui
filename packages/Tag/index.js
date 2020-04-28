// 导入组件，组件必须声明 name
import PPTag from './Index.vue'

// 为组件提供 install 安装方法，供按需引入
PPTag.install = function (Vue) {
    Vue.component(PPTag.name, PPTag)
}

// 导出组件
export default PPTag