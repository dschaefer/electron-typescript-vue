var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/app/renderer.ts',
    target: 'electron-renderer',
    output: {
        filename: 'dist/app.js'
    },
    resolve: {
        extensions: [ '.ts', '.vue', '.js', '.node' ]
    },
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader', options: { esModule: true } },
            { test: /\.ts$/, loader: 'ts-loader', options: { appendTsSuffixTo: [ /\.vue$/ ] } },
            { test: /\.node$/, loader: 'node-loader' }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './src/app/index.html', to: 'dist/index.html' }
        ])
    ],
    devtool: '#source-map'
}