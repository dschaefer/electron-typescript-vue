var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './test/unit/index.js',
    target: 'electron-renderer',
    output: {
        filename: 'test/out/app.js'
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
            // {output}/file.txt
            { from: './src/app/index.html', to: 'dist/index.html' }
        ])
    ],
    devtool: '#source-map'
}