const fs = require("fs");
const PATH = "./package.json";
const args = process.argv.splice(2);
const arg = args[args.length - 1];
const currentPackages = require(`./packages/${arg}-package.js`);
const shell = require("shelljs");
const npmConfig = require("./npm-publish");

function getPackageJson() {
    const _packageJson = fs.readFileSync(PATH);
    return JSON.parse(_packageJson);
}

function writePackageJson(oldPackages, currentPackages, isRecover = false) {
    !isRecover && console.log("---根据配置生成package.json文件---");
    const newPackages = {...oldPackages, ...currentPackages};
    fs.writeFile(PATH, JSON.stringify(newPackages, null, "\t"), function (err) {
        if (err) return;
        if (!isRecover) {
            shell.exec(newPackages.scripts.build + npmConfig + " && npm publish");
            writePackageJson(currentPackages, oldPackages, true);
        }
    });
}

const oldPackages = getPackageJson();
writePackageJson(oldPackages, currentPackages, false);
