# pipi-ui

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

## 介绍

这是一个组件库架子，也是一个组件库。

为什么说是组件库，pipi-ui 将会集成更多的组件，发布到 npm 上（通用性组件，样式组件等等）:crocodile:。

为什么说是架子，因为内部实现了动态修改 pakeage.json 和动态 npm 修改 npm config 的功能，这意味着我可以根据不同的环境上传不同组件库，使这些不同的组件库集中在一个项目里面管理，还有自动集成文档例子、组件库文档等等功能

基于 vue-cli 和 vuepress 维护团队/个人组件库 :yellow_heart: :yellow_heart: :yellow_heart:

## Features

- [x] 集成 examples 方便调试，和测试工具（mocha + chai）
- [x] 按需加载组件
- [x] 根据注释集成自动化生成文档（vuepress + vue-docgen-cli）
- [x] 根据组件修改自动更新文档（开发模式）
- [x] 动态修改 packapge.json 和 npm 配置（多库统一）
- [ ] 优化多库统一的管理
- [ ] 添加 eslint
- [ ] 代码规范工具

## 脚本

```js
npm i //按照依赖

npm run serve //启动例子

npm run docs //启动自动生成的文档

npm run build //构建组件库

npm run docs:build //构建文档

npm run publish //发布到npm，注意必须先在npm login
```

## 下一步计划

优化多库统一的管理

新增 ui 库 pipi-el-ui，对 element-ui 的组件高层级封装（hoc），完善业务

## Examples

## Question

### q：可以不用项目里面的 npm run publish 吗？

a：npm run publish 该命令的主要作用的是，根据你本地 xxx.env.js 里面的
package 和 npm 去动态修改 package.json 配置和 npm 的设置，最后 npm publish（必须首先执行 npm login），
执行成功后会恢复当前的 package.json。

如在当前目录直接执行 npm publish 会直接发布当前的 package.json 上 npm

### q：增加多一个组件库该如何设置？

a：步骤如下:

```js
//在根目录建pipi-ui.env.js文件
module.exports = {
  key: "pipi-ui", //当前环境
  components: "packages", //组件库所在的目录（根目录）
  packages: {
    //当前组件库名字
    name: "pipi-ui",
    //当前组件库版本
    version: "1.0.7",
    // ...  其他设置
  },
  //发布npm的设置
  npmConfig: {
    //设置npm的地址
    registry: "https://registry.npmjs.org/",
    // ...  其他设置
  },
  //vue.config.js选项
  "vue.config": {},
};
```

再在 package.json 的 scripts 增加如下

```js
"scripts": {
        "build:pipi-ui": "vue-cli-service build pipi-ui && node build/gen-css-js.js",
        "publish:pipi-ui": "node build/gen-publish.js pipi-ui",
        "docs:pipi-ui": "concurrently \"vue-docgen --watch\" \"vuepress dev docs pipi-ui\"",
        "docs:build:pipi-ui": "vue-docgen && vuepress build docs pipi-ui",
    },
```

## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/lgkang"><img src="https://avatars2.githubusercontent.com/u/36944726?v=4" width="100px;" alt=""/><br /><sub><b>lgkang</b></sub></a><br /><a href="#a11y-lgkang" title="Accessibility">️️️️♿️</a> <a href="#question-lgkang" title="Answering Questions">💬</a> <a href="#blog-lgkang" title="Blogposts">📝</a> <a href="https://github.com/lgkang/pipi-ui/issues?q=author%3Algkang" title="Bug reports">🐛</a> <a href="#business-lgkang" title="Business development">💼</a> <a href="https://github.com/lgkang/pipi-ui/commits?author=lgkang" title="Code">💻</a> <a href="#content-lgkang" title="Content">🖋</a> <a href="#data-lgkang" title="Data">🔣</a> <a href="#design-lgkang" title="Design">🎨</a> <a href="https://github.com/lgkang/pipi-ui/commits?author=lgkang" title="Documentation">📖</a> <a href="#eventOrganizing-lgkang" title="Event Organizing">📋</a> <a href="#example-lgkang" title="Examples">💡</a> <a href="#financial-lgkang" title="Financial">💵</a> <a href="#fundingFinding-lgkang" title="Funding Finding">🔍</a> <a href="#ideas-lgkang" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-lgkang" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-lgkang" title="Maintenance">🚧</a> <a href="#platform-lgkang" title="Packaging/porting to new platform">📦</a> <a href="#plugin-lgkang" title="Plugin/utility libraries">🔌</a> <a href="#projectManagement-lgkang" title="Project Management">📆</a> <a href="https://github.com/lgkang/pipi-ui/pulls?q=is%3Apr+reviewed-by%3Algkang" title="Reviewed Pull Requests">👀</a> <a href="#security-lgkang" title="Security">🛡️</a> <a href="#talk-lgkang" title="Talks">📢</a> <a href="https://github.com/lgkang/pipi-ui/commits?author=lgkang" title="Tests">⚠️</a> <a href="#tool-lgkang" title="Tools">🔧</a> <a href="#translation-lgkang" title="Translation">🌍</a> <a href="#tutorial-lgkang" title="Tutorials">✅</a> <a href="#userTesting-lgkang" title="User Testing">📓</a> <a href="#video-lgkang" title="Videos">📹</a></td>
    <td align="center"><a href="https://github.com/wutihong"><img src="https://avatars3.githubusercontent.com/u/24377930?v=4" width="100px;" alt=""/><br /><sub><b>wutihong</b></sub></a><br /><a href="https://github.com/lgkang/pipi-ui/commits?author=wutihong" title="Code">💻</a> <a href="#content-wutihong" title="Content">🖋</a> <a href="#data-wutihong" title="Data">🔣</a> <a href="https://github.com/lgkang/pipi-ui/commits?author=wutihong" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/llzzrr"><img src="https://avatars2.githubusercontent.com/u/40113712?v=4" width="100px;" alt=""/><br /><sub><b>llzzrr</b></sub></a><br /><a href="#business-llzzrr" title="Business development">💼</a> <a href="https://github.com/lgkang/pipi-ui/commits?author=llzzrr" title="Code">💻</a> <a href="#content-llzzrr" title="Content">🖋</a> <a href="#data-llzzrr" title="Data">🔣</a> <a href="https://github.com/lgkang/pipi-ui/commits?author=llzzrr" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/xuanyulingnfeg"><img src="https://avatars2.githubusercontent.com/u/22806666?v=4" width="100px;" alt=""/><br /><sub><b>lingfeng</b></sub></a><br /><a href="#a11y-xuanyulingnfeg" title="Accessibility">️️️️♿️</a> <a href="#question-xuanyulingnfeg" title="Answering Questions">💬</a> <a href="#blog-xuanyulingnfeg" title="Blogposts">📝</a> <a href="https://github.com/lgkang/pipi-ui/issues?q=author%3Axuanyulingnfeg" title="Bug reports">🐛</a> <a href="#business-xuanyulingnfeg" title="Business development">💼</a> <a href="https://github.com/lgkang/pipi-ui/commits?author=xuanyulingnfeg" title="Code">💻</a> <a href="#content-xuanyulingnfeg" title="Content">🖋</a> <a href="#data-xuanyulingnfeg" title="Data">🔣</a> <a href="#tutorial-xuanyulingnfeg" title="Tutorials">✅</a> <a href="#userTesting-xuanyulingnfeg" title="User Testing">📓</a> <a href="#video-xuanyulingnfeg" title="Videos">📹</a></td>
    <td align="center"><a href="https://github.com/ypl9591"><img src="https://avatars1.githubusercontent.com/u/62583614?v=4" width="100px;" alt=""/><br /><sub><b>ypl9591</b></sub></a><br /><a href="#a11y-ypl9591" title="Accessibility">️️️️♿️</a> <a href="#question-ypl9591" title="Answering Questions">💬</a> <a href="#blog-ypl9591" title="Blogposts">📝</a> <a href="https://github.com/lgkang/pipi-ui/issues?q=author%3Aypl9591" title="Bug reports">🐛</a> <a href="#business-ypl9591" title="Business development">💼</a> <a href="https://github.com/lgkang/pipi-ui/commits?author=ypl9591" title="Code">💻</a> <a href="#content-ypl9591" title="Content">🖋</a> <a href="#data-ypl9591" title="Data">🔣</a> <a href="https://github.com/lgkang/pipi-ui/commits?author=ypl9591" title="Documentation">📖</a> <a href="#eventOrganizing-ypl9591" title="Event Organizing">📋</a> <a href="#example-ypl9591" title="Examples">💡</a> <a href="#financial-ypl9591" title="Financial">💵</a> <a href="#fundingFinding-ypl9591" title="Funding Finding">🔍</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
