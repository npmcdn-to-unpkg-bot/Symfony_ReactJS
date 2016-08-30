var webpack = require('webpack');
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "web/js/prod");
var SRC_DIR = path.resolve(__dirname, "web/js/dev");

var config = {
    entry: {
        global: SRC_DIR + "/global.js",
        home: SRC_DIR + "/home.js"
    },
    output: {
        path: DIST_DIR + "/app",
        filename: "[name].js",
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