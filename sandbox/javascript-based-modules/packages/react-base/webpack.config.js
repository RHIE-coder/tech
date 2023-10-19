const path = require("path");

module.exports = {

    resolve : {
        extensions : ['.js', '.jsx']
    },
    entry:{ 
        app : ['./src/index.jsx'], 
    },
    output:{
        path: path.join(__dirname, 'public', 'dist'),
        filename : '[name].bundle.js'  
    },
    module : { 
        rules : [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', ["@babel/preset-react", {"runtime": "automatic"}]],
                },
            },
        ],
    },
    devServer: {
        // host: webpackArgv.nodeEnv === "local" ? "localhost" : "0.0.0.0",
        port: 9000,

        static: {
            directory: path.join(__dirname, 'public'),
        },
        // compress: true,

        liveReload: true,
        allowedHosts: "all",
        open: true,
        historyApiFallback: true,
    },
};