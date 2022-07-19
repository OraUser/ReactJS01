const path = require('path');

module.exports = {
    entry: './src/index.ts', // входный файл проекта, единая (в идеале) точка входа
    output: {
        path: path.join(__dirname, '/dist'), // каталог для сборки
        filename: 'bundle.[contenthash].js',
        clean: true, // очистка каталога сборки перед каждой сборкой
    },
    devtool: 'source-map', // для отладки, не включать в прод
	mode: 'development',  // | 'development' | 'none'
	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".ts", ".tsx", ".js"]
	},
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
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
			{ test: /\.tsx?$/, loader: "ts-loader" },
        ],
    }
};
