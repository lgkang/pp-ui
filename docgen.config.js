const path = require("path");
module.exports = {
    componentsRoot: "packages",
    components: "**/[A-Z]*.vue",
    outDir: "./docs/components",
    getDestFile: (file, config) => {
        if (file.includes("/")) {
            console.log(file);

            file = file.split("/")[0] + ".vue";
            return path.join(config.outDir, file).replace(/\.vue$/, ".md");
        } {
            return ''
        }
    },
    defaultExamples: true
};
