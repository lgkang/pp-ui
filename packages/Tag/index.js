// 导入组件，组件必须声明 name
import Tag from './Index.vue'

// 为组件提供 install 安装方法，供按需引入
Tag.install = function (Vue) {
    Vue.component(Tag.name, Tag)
}

// 导出组件
export default Tag