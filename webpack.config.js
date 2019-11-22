const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        alias: {
            modules: path.resolve(__dirname, 'src/modules/'),
        },
    },
    mode: 'development',
    watch: true,
};
