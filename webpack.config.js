var webpack = require('webpack');
var path = require("path");

var PROD_DIR = path.resolve(__dirname, "web/prod");
var TSX_DIR = path.resolve(__dirname, "web/dev/Typescript/");

var config = {
    entry: {
        'main': TSX_DIR + '/main.tsx',
        'index': TSX_DIR + "/index.tsx",
        'blog': TSX_DIR + "/blog.tsx",
        'contact': TSX_DIR + "/contact.tsx"
    },
    output: {
        path: PROD_DIR + "/app/js",
        filename: "[name].js",
        publicPath: "./web/"
    },
    devtool: "source-map",
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".tsx", ".js"]
    },
    module: {
        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ],
        loaders: [
            { test: /\.tsx?$/, include: TSX_DIR, loader: "ts-loader"}
        ],
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};

module.exports = config;