//npm的发布命令配置
const config = {
    registry: "https://registry.npmjs.org/",
    "init-author-name": "lipipi"
};
let result = "";
Object.keys(config).forEach(key => {
    if (config[key]) {
        result = result + ` && npm set ${key}=${config[key]}`
    }
});
module.exports = result;
