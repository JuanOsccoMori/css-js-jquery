const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const path = require("path");

/** @type {import('webpack').Configuration} */

const devConfig = {
    mode: "development",
    devtool: 'eval-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, "public")
        },
        compress: true,
    },
    
    module: {
        rules: [
            {
                use: ["style-loader", "css-loader"],
                test: /\.css$/i,
            }
        ]
    },
}

module.exports = merge(common, devConfig)