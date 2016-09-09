var webpack = require('webpack');
var path = require("path");

var PROD_DIR = path.resolve(__dirname, "web/prod");
var DEV_DIR = path.resolve(__dirname, "web/dev");
var TSX_DIR = path.resolve(__dirname, "web/dev/Typescript/");

var config = {
    entry: {
        global: DEV_DIR + "/global.js",
        home: DEV_DIR + "/home.js",
        'index': TSX_DIR + "/index.tsx",
        'blog': TSX_DIR + "/blog.tsx",
        'contact': TSX_DIR + "/contact.tsx"
    },
    output: {
        path: PROD_DIR + "/app",
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
                test: /\.js?/,
                include: DEV_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test: /\.tsx?$/,
                include: TSX_DIR,
                loader: "ts-loader"
            }
        ],
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};

module.exports = config;