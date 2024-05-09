# My-clock-app
Github: https://github.com/nonamelhm/my-clock-app.git

> The project is a clock application that allows users to create and manage multiple clocks.

- [Development environment](#Development environment)
- [Operating instruction](#Operating instruction)
- [Warehouse and packing instructions](#Warehouse and packing instructions)
- [Branch configuration description](#Branch configuration description)
- [Functional planning](#Functional planning)

## Development environment

- Coding tool：WebStorm 2023.1.4
- node：21.7.3
- React

## Operating instruction

### 1、Installation dependency

Open the terminal in the root directory of the current project and enter the command`npm install`to install the third-party library


### 2、Operational item

```shell
npm run start:dev
```

## Warehouse and packing instructions

- dev：Development branch
- alpha：Test service - pre-release branch

| name  | Environment configuration         | Local test command              | Pack command                    | remark               |
|-------|:----------------------------------|---------------------|-------------------------|-------------------|
| dev   | .env.dev                          | `npm run start:dev` |                         | Development branch            |
| alpha | .env.alpha                        |                     | `npm run build:alpha`   | Test service environment deployment branch |

## Branch configuration description

**Branch configuration purpose**

- In order to achieve the difference between running ports
- In order to...

```
REACT_APP_ENV= development   //environment
REACT_APP_PORT= 8080   //Default operating port
```


## Functional planning

- [ ] 

