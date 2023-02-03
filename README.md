# [BIKE APP](https://dev-academy-assignment.onrender.com/)

Developed by Alexei Golovanov

This project was created as a pre-assignment for [Solita's Dev Academy 2023](https://github.com/solita/dev-academy-2023-exercise).<br>
On this web app you can search through all city bike stations in the Helsinki and Espoo areas, and view information about each station.<br>
Tags: `MongoDB`, `Express`, `React` `Node`, `Typescript`

## Run The App Locally

1. Run `git clone https://github.com/DJ-AG/Bike-App.git` in your terminal to clone the repository. (Alternatively, you could download the repo instead.)
2. Navigate to cloned folder and run `npm run setup-production` to compile typescript files and install the necessary dependencies .
3. Run `npm start` to get a local development build running or `node index` to run app in local production setup
4. Create .env in root <br>
![create env](/media/env.png)
add your own mongodb key here <br>
![add mongourl](/media/mongoUrl.png)<br>

Navigate to client/src/utils/ and open GoogleMapsUtils.ts<br> 
![findGoogleUtils](/media/pathToGoogle.png)
add your Google maps api key here<br>
![add googleapi](/media/googleApiKey.png)<br>
Remmember to remove the Angle Bracket!

## Client (Frontend) && Server (Backend)
The frontend is built with [React](https://reactjs.org/) + [Typescript](https://www.typescriptlang.org/) while the backend uses only Typescript that is compiled into JavaScirpt after the initail setup-production is runned. The project was design with mobile and desktop support in mind <br>

## MongoDB
MongoDB was used in project for storing data. Data that was shared by dev academy had to be checked and cleand from duplicates, i personaly used [MongoDB extension](https://code.visualstudio.com/docs/azure/mongodb) on Visual Studio Code with aggregate querry you can find the file with the data in the root "db.stations.aggregate"

## Reflection
There's a lot of improvements to be made but still i manage pretty well for my first time with typescript fullstack project. I will continue to maintain this project and improving it by adding new aspects to it like profiles, payments and so on.. in time.

Station data is owned by [HSL](https://www.avoindata.fi/data/en_GB/dataset/hsl-n-kaupunkipyoraasemat/resource/a23eef3a-cc40-4608-8aa2-c730d17e8902?inner_span=True).<br> 
