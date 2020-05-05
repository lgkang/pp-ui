module.exports = {
    //当前环境
    key: 'pipi-ui',
    //组件库所在的目录
    components: 'packages',
    //发布packages.json的设置
    packages: {
        //当前组件库名字
        "name": 'pipi-ui',
        "version": "1.0.7"
        // ...  其他设置
    },
    //发布npm的设置
    npmConfig: {
        //设置npm的地址
        registry: "https://registry.npmjs.org/"
        // ...  其他设置
    },
    //vue.config选项
    'vue.config': {

    }
}