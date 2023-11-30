
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    entry : './src/index.js',
    output : {
        filename : 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',

    module : {
        rules : [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude:"/node_modules/",
                resolve:{
                    extensions : ['.js', '.jsx'],
                }
            },
            {
                test : /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                type: "asset",
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
              },
        ],
    },
    devServer: {
        port: 4000
    },
    plugins : [
        new HtmlWebpackPlugin({
            template :path.resolve(__dirname, "public", "index.html"),
        }),
    ], 
};