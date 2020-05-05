const glob = require('glob');
const getPages = function () {
    let result = {};
    glob.sync("./*.env.js").forEach((filepath) => {
        const prev = filepath.split('.env.js')[0];
        const name = prev.split('/')[1];
        const modules = require(filepath);
        result[name] = {key: name, ...modules}
    });
    return result;
};
const result = getPages();
module.exports = key => {
    if (!key && key !== 0) {
        const args = process.argv.splice(2);
        const arg = args[args.length - 1];
        key = arg;
    }
    const currentConfig = result[key] || {}
    return currentConfig
}