const path = require('path');
const Components = require('../../components.json');
module.exports =  {
    mode: 'production',
    entry: Components,
    output: {
        path: path.resolve(process.cwd(), './lib'),
        filename: '[name].js',
        chunkFilename: '[id].js',
        libraryTarget: 'umd'
    },
    reslove: {
        extensions: ['.js', '.vue', 'json'],
        modules: ['node_modules']
    },
    externals: ['vue'],
    performance: {
        hints: false
    },
    stats: 'none',
    module: {
        rules: [
            {
                test: /\.(jsx?|babel|es6)$/,
                include: process.cwd(),
                exclede: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        preserveWhitespace: false
                    }
                }
            }
        ]
    }
}
