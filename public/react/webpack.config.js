var path = require('path');

var PUBLIC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: PUBLIC_DIR + '/index.js',
    output: {
        path: PUBLIC_DIR,
        filename: "../../js/bundle.js",
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                exclude: /node_modules/,
                include: PUBLIC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {test: /\.scss?/i, loader: "style-loader!css-loader"},
            {test: /\.css?/i, loader: "style-loader!css-loader"}
        ]
    }
};

module.exports = config;