module.exports = {
    entry: './src/main/main.ts',
    target: 'electron-main',
    output: {
        filename: 'dist/main.js'
    },
    resolve: {
        extensions: [ '.ts', '.js', '.json' ]
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' },
            { test: /\.json$/, loader: 'json-loader' }
        ]
    },
    devtool: '#source-map'
}