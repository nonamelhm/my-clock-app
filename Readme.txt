Github: https://github.com/nonamelhm/my-clock-app.git


My-clock-app
The project is a clock application that allows users to create and manage multiple clocks. 该项目是一个

Environment
Coding tool：WebStorm 2023.1.4
node：21.7.3
React

Operating
1、Installation dependency
current project and enter the command npm install to install the third-party library

2、Operational item
npm run start:dev
Packing
dev：Development branch
alpha：Test service - pre-release branch
name	Environment   Local test comman     Pack command	    remark
dev	.env.dev      npm run start:dev		                    Development branch
alpha	.env.alpha		            npm run build:alpha	        Test service deployment branch

Branch
Branch configuration purpose
In order to achieve the difference between running ports
In order to...
REACT_APP_ENV= development   //environment
REACT_APP_PORT= 8080   //Default operating port

Plan
……


