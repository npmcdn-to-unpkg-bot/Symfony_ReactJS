var webpack = require('webpack');
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "web/js/prod");
var SRC_DIR = path.resolve(__dirname, "web/js/dev");
var TSX_DIR = path.resolve(__dirname, "web/typescript/");

var config = {
    entry: {
        global: SRC_DIR + "/global.js",
        home: SRC_DIR + "/home.js",
        typescript: TSX_DIR + "/index.tsx"
    },
    output: {
        path: DIST_DIR + "/app",
        filename: "[name].js",
        publicPath: "./web/"
    },
    devtool: "source-map",
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".tsx", ".js"]
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ],
        loaders: [
            {
                test: [
                    /\.js?/,
                    /\.tsx?$/
                ],
                include: [SRC_DIR, TSX_DIR],
                loader: [
                    "babel-loader",
                    "ts-loader"
                ],
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ],
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};

module.exports = config;