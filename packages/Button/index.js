// 导入组件，组件必须声明 name
import PPButton from './Index.vue'

// 为组件提供 install 安装方法，供按需引入
PPButton.install = function (Vue) {
    Vue.component(PPButton.name, PPButton)
}

// 导出组件
export default PPButton