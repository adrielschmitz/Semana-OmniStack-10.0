# DevRadar

## Abaut
This repository was created for the project week OmniStack 10.0, avalible by the RocketSeat company. 
The goal was to create an application to list nearby developers and help companies find professionals.

## Technologies used
Here is the techonoliges used in this project.

### Back-end
Was used [NodeJs](https://nodejs.org/en/) in the version 10.15.2 and [Nodemon](https://www.npmjs.com/package/nodemon) for 
the instant reload. 
#### Params kind
+ Query Params: request.query 
+ Route Params: request.params 
+ Body: request.body

#### Data Base
For data base was used the [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) in your free version, together with the 
[Mongose](https://www.npmjs.com/package/mongoose) library.

#### External libraries
Was used the [Axios](https://www.npmjs.com/package/axios) library for the consumed datas of the Github users.

### Front-end
For the web application was used ReactJS, HTML5 and CSS. 

### Mobile
The application mobile was create for the IOS and Android plataforms using [React Native](https://reactnative.dev/).
For the access to native resources of cell phone was used [Expo](https://expo.io/) library. For the emmulation and
internal tests, was used [Expo App](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=end_US)

## Internal Tests
### Back-end
With the [Yarn](https://classic.yarnpkg.com/en/docs/install#debian-stable) installed, inside the backend file run the command ```yarn install``` in your terminal for the installation of the project dependecies. After this, run the command ```yarn dev```.

### Init front-end
Inside the frontend file, run the command ```yarn install``` in your terminal for the installation of the project. After this, run the command ```yarn start```.

### Init front-end
Inside the mobile file, run the command ```yarn install``` in your terminal for the installation of the project dependecies. After this, run the command ```yarn start``` and you can read a QR Code with the Expo App.


