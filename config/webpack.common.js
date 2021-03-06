const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

function webpackCommonConfigCreator(options) {
	return {
		mode: options.mode,
		entry: "./src/index.js",
		output: {
			filename: "js/bundle.js",
			path: path.resolve(__dirname, "../build"),
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, "../public/index.html"),
			}),
			new CleanWebpackPlugin({
				cleanOnceBeforeBuildPatterns: [
					path.resolve(process.cwd(), "build/"),
					path.resolve(process.cwd(), "dist/"),
				],
			}),
			new ExtractTextPlugin({
				filename: "css/[name][hash].css",
			}),
		],
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					include: path.resolve(__dirname, "../src"),
					use: [
						{
							loader: "babel-loader",
							options: {
								presets: ["@babel/preset-react"],
								plugins: ["react-hot-loader/babel"],
							},
						},
					],
				},
				{
					test: /\.(css|less)$/,
					include: path.resolve(__dirname, "../src"),
					use: ExtractTextPlugin.extract({
						fallback: "style-loader",
						use: [
							{
								loader: "css-loader",
								options: {
									modules: {
										mode: "local",
										localIdentName:
											"[path][name]_[local]--[hash:base64:5]",
									},
									localsConvention: "camelCase",
								},
							},
							{
								loader: "postcss-loader",
								options: {
									ident: "postcss",
									plugins: (loader) => [
										require("postcss-import")({
											root: loader.resourcePath,
										}),
										require("autoprefixer")(),
									],
								},
							},
							"less-loader"
						],
					}),
				},
				{
                    test: /\.(css|less)$/, 
                    exclude: path.resolve(__dirname, '../src'),
                    use: [
                        "style-loader/url",
                        {
                            loader: 'file-loader',
                            options: {
                                name: "css/[name].css"
                            }
                        }
                    ]
                },
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/,
					use: ["file-loader"],
				},
				{
					test: /\.(jpg|png|svg|gif)$/,
					use: [
						{
							loader: "url-loader",
							options: {
								limit: 10240,
								name: "images/[hash].[ext]",
							},
						},
					],
				},
			],
		},
	};
}

module.exports = webpackCommonConfigCreator;
