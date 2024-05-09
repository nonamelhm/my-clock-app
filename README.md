# My-clock-app
Github: https://github.com/nonamelhm/my-clock-app.git

> The project is a clock application that allows users to create and manage multiple clocks.

- [Environment](#Environment)
- [Operating](#Operating)
- [Packing](#Packing)
- [Branch](#Branch)
- [Plan](#Plan)

## Environment

- Coding tool：WebStorm 2023.1.4
- node：21.7.3
- React

## Operating

### 1、Installation dependency

Open the terminal in the root directory of the current project and enter the command`npm install`to install the third-party library


### 2、Operational item

```shell
npm run start:dev
```

## Packing

- dev：Development branch
- alpha：Test service - pre-release branch

| name  | Environment configuration         | Local test command              | Pack command                    | remark               |
|-------|:----------------------------------|---------------------|-------------------------|-------------------|
| dev   | .env.dev                          | `npm run start:dev` |                         | Development branch            |
| alpha | .env.alpha                        |                     | `npm run build:alpha`   | Test service environment deployment branch |

## Branch

**Branch configuration purpose**

- In order to achieve the difference between running ports
- In order to...

```
REACT_APP_ENV= development   //environment
REACT_APP_PORT= 8080   //Default operating port
```


## Plan

- [ ] 

