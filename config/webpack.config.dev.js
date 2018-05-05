const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const VENDOR_LIBS = [
    'react', 'react-dom', 'mobx', 'mobx-react', 'recompose'
]

module.exports = {

    entry: {
        bundle: './js/index.jsx',
        vendor: VENDOR_LIBS
    },

    output: {
        path: `${__dirname}/public`,
        filename: '[name].[chunkhash].js',
    },

    devtool: 'inline-source-map',

    devServer: {
        contentBase: '../src/',
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            sourceMap: true,
                            localIdentName: '[path]--[name]-[local]--[hash:base64:5]',
                        },
                    }],
                }),
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'The Blog (PET Project)',
            filename: 'index.html',
            chunks: ['index'],
            template: './src/templates/index.html',
            inject: true,
        }),
    ]
}