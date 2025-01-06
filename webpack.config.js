const path = require("path");

module.exports = {
    entry: "./src/index.js", // Entry point for the SDK
    output: {
        filename: "scylla-sdk.js", // Output file
        path: path.resolve(__dirname, "dist"), // Output folder
        library: "ScyllaSDK", // Name of the global variable
        libraryTarget: "umd", // Universal Module Definition
    },
    mode: "production", // Optimize for production
};
