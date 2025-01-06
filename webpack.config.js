const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'scylla-sdk.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'ScyllaSDK',
        libraryTarget: 'umd',
    },
    mode: 'production',
};
