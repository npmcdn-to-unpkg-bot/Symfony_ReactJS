var webpack = require('webpack');
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "web/js/prod");
var SRC_DIR = path.resolve(__dirname, "web/js/dev");

var config = {
    entry: SRC_DIR + "/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "react.js",
        publicPath: "./web/"
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    }
};

module.exports = config;