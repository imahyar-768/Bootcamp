const htmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); 

module.exports = {
    module: {
        reules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel.loader"
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html.loader",
                        options: { minimize: true}
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "css.loader"
                    },
                    {
                        loader: "css-loader",
                        options: { modules: true }
                    }
                ]
            },
        ]

    },

    plugin: [
        new htmlWebPackPlugin({template: './src/index.html'})
    ]
}