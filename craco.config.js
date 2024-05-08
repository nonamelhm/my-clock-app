const path = require("path");
const dotenv = require('dotenv');

// 解析命令行参数获取环境变量标识
const envFlagIndex = process.argv.findIndex(arg => arg.startsWith('--env='));
const envFlag = envFlagIndex !== -1 ? process.argv[envFlagIndex].split('=')[1] : 'dev';
const envFileName = `.env.${envFlag}`;

// 从对应的 .env 文件中加载环境变量
dotenv.config({ path: path.resolve(__dirname, envFileName) });

module.exports = {
    webpack: {
        alias: {
            //配置从@指定从src寻找文件
            "@": path.resolve(__dirname, "src")
        }
    },
    devServer: {
        // 设置 devServer 运行的端口为 .env 文件中的 PORT 变量值
        port: process.env.REACT_APP_PORT || 8080,
        proxy: {
            // 设置代理 env文件中定义
            '/api': {
                // 设置代理目标 env文件中定义
                target: '',
                changeOrigin: true,
                // 可选的，重写路径，例如将 /api 替换为空字符串
                pathRewrite: { '^/api': '' }
            }
        }
    }
};
