const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');
const globAll = require('glob-all');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const parts = require('./webpack.parts');

const PATHS = {
    root: path.join(__dirname),
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'client')
};

const commonConfig = merge([
    {
        entry: PATHS.app + '/main.js',
        output: {
            path: PATHS.build,
            filename: 'js/[name].[chunkhash:8].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: PATHS.app + '/index.html'
            }),
            new VueLoaderPlugin()
        ],
        resolve: {
            extensions: ['.js', '.jsx', '.json', '.less', '.sass', '.vue'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
            },
        }
    }
]);

const productionConfig = merge([
    parts.clean(),
    parts.loadFont(),
    parts.minifyCss({
        options: {
            discardComments: {
                removeAll: true
            },
            safe: true
        }
    }),
    parts.loadImages({
        options: {
            limit: 5000,
            name: 'iamges/[hash].[ext]',
            publicPath: '../'
        }
    }),
    parts.purifyCss({
        paths: globAll.sync([`${PATHS.app}/**/*.js`], { nodir: true }),
        minimize: true
    }),
    parts.extractCss({
        use: ['css-loader', parts.autoprefixer()]
    }),
    parts.loadJavascript({ include: PATHS.app }),
    parts.minifyJavascript(),
    parts.copyModels(PATHS.app + '/static', PATHS.build + '/static'),
    parts.copyModels(PATHS.root + '/favicon.ico', PATHS.build),
    {
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'chunk/vendor',
                        chunks: 'initial'
                    }
                }
            },
            runtimeChunk: {
                name: 'chunk/manifest'
            }
        }
    }
]);

const developmentConfig = merge([
    parts.devServer({
        host: process.env.HOST,
        port: process.env.PORT
    }),
    parts.loadCss(),
    parts.loadImages(),
    parts.loadJavascript({
        include: PATHS.app
    })
]);

module.exports = mode => {
    if (mode === 'production') {
        return merge(commonConfig, productionConfig, { mode });
    }
    return merge(commonConfig, developmentConfig, { mode });
}