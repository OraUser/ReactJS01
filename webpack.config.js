const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // входный файл проекта, единая (в идеале) точка входа
    output: {
        path: path.join(__dirname, '/dist'), // каталог для сборки
        filename: 'bundle.[contenthash].js',
        clean: true, // очистка каталога сборки перед каждой сборкой
    },
    devtool: 'source-map', // для отладки, не включать в прод
    module: {
        // Набор правил. Pipeline сборки
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
    ],
};
