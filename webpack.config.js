const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "scylla-sdk.js", // Output file name
        path: path.resolve(__dirname, "dist"), // Output directory
        library: "ScyllaSDK", // Global variable name
        libraryTarget: "umd", // UMD format for compatibility
        globalObject: "this", // Ensures compatibility in both browser and Node.js
    },
    mode: "production", // Optimized for production
};
