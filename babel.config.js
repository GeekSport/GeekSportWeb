module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ["import", { libraryName: "@ant-design/react-native" }],
    ["module-resolver", {
      root: ['./src'],
      alias: {
        '@app': './src',
      },
    }],
  ],
}
