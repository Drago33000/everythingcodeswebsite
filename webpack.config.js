const path = require('path');

module.exports = {
    entry: './src/signup.js', // Entry point of your application
    output: {
        filename: 'bundle.js', // Output bundle file
        path: path.resolve(__dirname, 'dist') // Output directory
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Transform all .js files
                exclude: /node_modules/, // Except files in node_modules
                use: {
                    loader: 'babel-loader', // Use Babel loader
                    options: {
                        presets: ['@babel/preset-env'] // Use the env preset
                    }
                }
            }
        ]
    },
    mode: 'development' // Set the mode to development
};
