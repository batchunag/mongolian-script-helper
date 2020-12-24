const path = require('path');
 
module.exports = {
    entry: {
        content: './src/content.js',
        // background: './src/background.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    }
    // module: {
    //     rules: [
    //       // We use Babel to transpile JSX
    //       {
    //         test: /\.js$/,
    //         include: [
    //           path.resolve(__dirname, './src')
    //         ],
    //         use: 'babel-loader'
    //       }
    //     ]
    // }
    // target: 'web',
    // resolve: {
    //     extensions: [".js"],
    // }
}