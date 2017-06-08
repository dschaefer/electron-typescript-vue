module.exports = {
    entry: './src/main/main.ts',
    target: 'electron-main',
    output: {
        filename: 'dist/main.js'
    },
    resolve: {
        extensions: [ '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
}