const fs = require("fs");
const glob = require("glob");
const path = require("path");
const filesMkdirs = ["./dist/js/*.js", "./dist/css/*.css"];
/**
 * JS文件拷贝
 * @param src
 * @param dst
 */
var callbackFile = (src, dst) => {
  fs.readFile(src, "utf8", (error, data) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      return false;
    }
    fs.writeFile(dst, data.toString(), "utf8", function(error) {
      if (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        return false;
      }
    });
  });
};
function mkdirs(dirname, callback) {
  fs.exists(dirname, function(exists) {
    if (exists) {
      callback();
    } else {
      // console.log(path.dirname(dirname));
      mkdirs(path.dirname(dirname), function() {
        fs.mkdir(dirname, callback);
      });
    }
  });
}
// 复制目录
const copy = () =>
  filesMkdirs.forEach((files) => {
    glob.sync(files).forEach((filepath) => {
      let fileNameList = filepath.split(".");
      let fileName = fileNameList[1].split("/")[3].toLowerCase(); // 生成文件名
      let suffix = fileNameList[2]; // 生成后缀
      let changeDirectory = suffix === 'css' ? `./lib/es/${fileName}/style` : `./lib/es/${fileName}`; // 组件打包地址
      if (!fileName.includes("chunk-vendors")) {
        if (!fileName.includes("index"))
          mkdirs(changeDirectory, () =>
            callbackFile(filepath, `${changeDirectory}/index.${suffix}`)
          );
        else {
          callbackFile(filepath, `./lib/index.${suffix}`);
        }
      }
    });
  });

function rmdirPromise(filePath) {
  return new Promise((resolve, reject) => {
    fs.stat(filePath, function(err, stat) {
      if (err) reject(err);
      if (stat.isFile()) {
        fs.unlink(filePath, function(err) {
          if (err) reject(err);
          resolve();
        });
      } else {
        fs.readdir(filePath, function(err, dirs) {
          if (err) reject(err);
          dirs = dirs.map((dir) => path.join(filePath, dir));
          dirs = dirs.map((dir) => rmdirPromise(dir));
          Promise.all(dirs).then(() => {
            fs.rmdir(filePath, resolve);
          });
        });
      }
    });
  });
}

const genFiles = () => {
  fs.exists("./lib", async (exists) => {
    if (exists) {
      await rmdirPromise("./lib");
    }
    fs.mkdir("./lib", () => {
      copy();
    });
  });
};
genFiles();
