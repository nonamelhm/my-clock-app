const path = require("path");
const dotenv = require('dotenv');

// Parse command line arguments to get environment variable identification
const envFlagIndex = process.argv.findIndex(arg => arg.startsWith('--env='));
const envFlag = envFlagIndex !== -1 ? process.argv[envFlagIndex].split('=')[1] : 'dev';
const envFileName = `.env.${envFlag}`;

//Load environment variables from the corresponding.env file
dotenv.config({ path: path.resolve(__dirname, envFileName) });

module.exports = {
    webpack: {
        alias: {
            // Configure from @ to specify to find files from src
            "@": path.resolve(__dirname, "src")
        }
    },
    devServer: {
        // Set the PORT on which devServer runs to the value of the port variable in the.env file
        port: process.env.REACT_APP_PORT || 8080,
        proxy: {
            // Set proxy defined in the env file
            '/api': {
                // Set proxy target defined in the env file
                target: '',
                changeOrigin: true,
                // Optionally, rewrite the path, such as replacing /api with an empty string
                pathRewrite: { '^/api': '' }
            }
        }
    }
};
