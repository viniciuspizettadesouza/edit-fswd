const path = require('path');

module.exports = {
    mode: "none",
    entry: "./src/index.js",
    devtool: 'eval-cheap-module-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
    },
    module: {
        "rules": [
            {
                "test": /\.css$/,
                "use": [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                "test": /\.js$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "@babel/preset-env",
                        ]
                    }
                }
            },
        ]
    }
};