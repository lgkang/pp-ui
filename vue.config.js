const glob = require("glob");
const getPages = function () {
    let result = {};
    glob.sync("packages/*/*.js").forEach((filepath) => {
        let fileList = filepath.split("/");
        let fileName = fileList[fileList.length - 2];
        result[fileName] = {
            entry: `packages/${fileName}/index.js`,
        };
    });
    result["index"] = {
        entry: `packages/index.js`,
    };
    return result;
};
let pages = getPages();
module.exports = {
    pages: process.env.NODE_ENV === 'development' ? {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    } : pages,
    filenameHashing: false,
    lintOnSave:false,
    css: {
        extract: true,
    },
    configureWebpack: {
        output: {
            library: "[name]",
            libraryTarget: "umd"
        }
    },
    // 扩展 webpack 配置，使 packages 加入编译
    chainWebpack: (config) => {
        config.module
            .rule("js")
            .include.add("/packages")
            .end()
            .use("babel")
            .loader("babel-loader");
    },
};