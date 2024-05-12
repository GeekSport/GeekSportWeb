module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["nativewind/babel"],
    ["module-resolver", {
      root: ['./src'],
      alias: {
        '@app': './src',
      },
    }],
  ],
}
