module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ["import", {
        libraryName: "pipi-ui",
        libraryDirectory: "../lib/es",
        styleLibraryName: "../lib/es",
        style: false
    }]
]
}
