const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'bundle.js',
	},
	devServer: {
		static: path.resolve(__dirname, '../dist'),
		compress: true,
		hot: true
	},
	resolve: {
		extensions: ['.js']
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.pdf$/i,
				type: 'asset/source'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				],
			},
			{
				test: /\.(jpe?g|png|gif|svg|jpg)$/,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true,
							disable: true,
						},
					},
				],
			},
			{
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
		],
	},
};