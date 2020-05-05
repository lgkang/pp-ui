const glob = require("glob");
const genConfig = require("./env.config");
const config = genConfig();
const isDev = process.env.NODE_ENV === "development";
const getPages = function() {
  let result = {};
  glob.sync(`${config.components}/*/*.js`).forEach((filepath) => {
    let fileList = filepath.split("/");
    let fileName = fileList[fileList.length - 2];
    result[fileName] = {
      entry: `${config.components}/${fileName}/index.js`,
    };
  });
  result["index"] = {
    entry: `${config.components}/index.js`,
  };
  return result;
};
let pages = getPages();
//获取其他设置
const otherConfig = config["vue.config"] || {};
module.exports = {
  pages: isDev
    ? {
        index: {
          entry: "examples/main.js",
          template: "public/index.html",
          filename: "index.html",
        },
      }
    : pages,
  filenameHashing: false,
  lintOnSave: isDev,
  css: {
    extract: true,
  },
  configureWebpack: {
    output: {
      library: "[name]",
      libraryTarget: "umd",
    },
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: (config) => {
    config.module
      .rule("js")
      .include.add("/packages")
      .end()
      .use("babel")
      .loader("babel-loader")
      .end();
    config.module.rule("eslint").exclude.store.add(/lib/);
  },
  ...otherConfig,
};
