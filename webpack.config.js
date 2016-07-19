/**
 * Created by invictus on 7/19/16.
 */

var path = require('path');

var config = {
    entry: './src/main.js',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: '/static/'
    },

    devServer: {
        inline: true,
        port: 8000
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            }
        ]
    }
}
module.exports = config;