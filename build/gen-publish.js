const fs = require("fs");
const PATH = "./package.json";
const shell = require("shelljs");
const genConfig = require('../env.config')
const config = genConfig();
const currentPackages = config.packages;
const setNpm = config => {
    let result = "";
    Object.keys(config).forEach(key => {
        if (config[key]) {
            result = result + ` && npm set ${key}=${config[key]}`
        }
    });
    return result
};
const npmConfig = setNpm(config.npmConfig);

function getPackageJson() {
    const _packageJson = fs.readFileSync(PATH);
    return JSON.parse(_packageJson);
}

function writePackageJson(oldPackages, currentPackages, isRecover = false) {
    !isRecover && console.log("---根据配置生成package.json文件---");
    const newPackages = {
        ...oldPackages,
        ...currentPackages
    };
    fs.writeFile(PATH, JSON.stringify(newPackages, null, "\t"), function (err) {
        if (err) return;
        if (!isRecover) {
            //进行发布
            shell.exec(`npm run build:${config.key}` + npmConfig + " && npm publish");
            //恢复原来的package.json的配置
            writePackageJson(currentPackages, oldPackages, true);
        }
    });
}

const oldPackages = getPackageJson();
writePackageJson(oldPackages, currentPackages, false);