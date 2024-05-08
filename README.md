# My-clock-app

> The project is a clock application that allows users to create and manage multiple clocks.
> 该项目是一个时钟应用程序，允许用户创建和管理多个时钟。

- [Environment开发环境](#Environment开发环境)
- [Operating运行说明](#Operating运行说明)
- [Branch and Packing仓库分支及打包说明](#Branch and Packing仓库分支及打包说明)
- [Branch instructions分支配置说明](#Branch instructions分支配置说明)
- [Plan功能计划](#Plan功能计划)

## Environment开发环境

- Coding tool编码工具：WebStorm 2023.1.4
- node：21.7.3
- React

## Operating运行说明

### 1、安装依赖Installation dependency

在当前项目根目录下打开终端，输入命令`npm install`安装第三方库
Open the terminal in the root directory of the current project and enter the command`npm install`to install the third-party library


### 2、运行项目Operational item

```shell
npm run start:dev
```

## Branch and Packing仓库分支及打包说明

- dev：开发分支Development branch
- alpha：测试服——预发布分支Test service - pre-release branch

| 名称name | 环境配置Environment configuration         | 本地测试命令Local test command              | 打包命令Pack command                    | 备注remark               |
|--------|:-------------|---------------------|-------------------------|-------------------|
| dev    | .env.dev     | `npm run start:dev` |                         | 开发分支Development branch              |
| alpha  | .env.alpha   |                     | `npm run build:alpha`   | 测试服环境部署分支Test service environment deployment branch |

## Branch instructions分支配置说明

**分支配置目的Branch configuration purpose**

- 为了实现运行端口区别In order to achieve the difference between running ports
- 为了实现In order to...

```
REACT_APP_ENV= development   //环境environment
REACT_APP_PORT= 8080   //默认运行端口Default operating port
```


## Plan功能计划

- [ ] 

