module.exports = {
  sourceMaps: true,
  presets: [
    'module:metro-react-native-babel-preset',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
}
