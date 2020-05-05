const path = require("path");
const glob = require("globby");
const cwd = path.join(__dirname, "..");
const {
    parse
} = require("vue-docgen-api");
const genConfig = require('../../env.config')
const config = genConfig();

module.exports = async () => {
    const docFiles = glob.sync("components/**/*.md", {
        cwd
    }).map((f) => "/" + f);
    const componentsDir = config.components || 'packages'
    const components = await Promise.all(
        glob
        .sync(`../${componentsDir}/**/*.{vue,js,jsx,ts,tsx}`, {
            cwd,
            absolute: true
        })
        .map(async (path) => {
            return {
                name: (await parse(path)).displayName.replace(/[^a-zA-Z0-9_]/g, ""),
                path,
            };
        })
    );
    return {
        dest: path.join(__dirname, "./dist"),
        base: `/${config.name}/`,
        title: `${config.name}组件库`,
        port: 8888, //端口
        themeConfig: {
            search: false,
            nav: [{
                    text: "主页",
                    link: "/"
                },
                {
                    text: "组件",
                    link: "/components/Button/"
                },
            ],
            sidebar: docFiles,
        },
        plugins: [
            [
                "live",
                {
                    // to use a custom layout for your vue components
                    layout: path.resolve(__dirname, "./layout.vue"),
                    editorProps: {
                        lineNumbers: false,
                    },
                },
            ],
            [
                "@vuepress/register-components",
                {
                    components,
                },
            ],
        ],
    };
};