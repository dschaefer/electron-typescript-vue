module.exports = {
    entry: './src/app/renderer.ts',
    target: 'electron-renderer',
    output: {
        filename: 'dist/app.js'
    },
    resolve: {
        extensions: [ '.ts', '.vue', '.js' ]
    },
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader', options: { esModule: true } },
            { test: /\.ts$/, loader: 'ts-loader', options: { appendTsSuffixTo: [ /\.vue$/ ] } }
        ]
    }
}