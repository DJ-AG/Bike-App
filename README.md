# [BIKE APP](https://dev-academy-assignment.onrender.com/)
Project is live on https://dev-academy-assignment.onrender.com/

Developed by Alexei Golovanov

This project was created as a pre-assignment for [Solita's Dev Academy 2023](https://github.com/solita/dev-academy-2023-exercise).<br>
On this web app you can search through all city bike stations in the Helsinki and Espoo areas, and view information about each station.<br>
Tags: `MongoDB`, `Express`, `React` `Node`, `Typescript`

## Run The App Locally
(This tutorial will not teach you how to create GoogleApiKey or start up MongoDB server if you want to do it there are some good videos on youtube for it sorry :( )

 Lets get started

1. Run `git clone https://github.com/DJ-AG/Bike-App.git` in your terminal to clone the repository. (Alternatively, you could download the repo instead.)
2. Create .env in root <br>
![create env](/media/env.png)<br/>
3. Add your own mongodb key here <br/>
![add mongourl](/media/mongoUrl.png)<br/>
4. Navigate to client/src/utils/ and open GoogleMapsUtils.ts<br> 
![findGoogleUtils](/media/pathToGoogle.png)<br/>
5. add your Google maps api key here <br/>
![add googleapi](/media/googleApiKey.png)<br/>
Remmember to remove the Angle Bracket!<br/>
6. Navigate to cloned folder and run `npm run setup-production` to compile typescript files and install the necessary dependencies.
7. Run `npm start` to get a local development build running or `node index` to run app in local production setup

## Front Page
![front page](/media/main_page.jpg)

## All Station Page
![All Station page](/media/station_page.jpg)
<br/>
this page display's all the stations found in Database here you can search station by it's name, show the location on map or delete the whole station from Database.
Page displays max of 10 stations per page and by clicking prev and next you can traverse the next or previous 10 stations.

## Add Station Page
![Add Station Page](/media/add_station.jpg)
<br/>
Here by filling the form and clicking submit you can create a station.

## Jorneys Page
![Jorneys Page](/media/jorneys_part1.jpg)
<br/>
![Jorneys Page](/media/jorneys_part2.jpg)
<br/>
On this page you can see all the jorneys mage by City Bike Finland. You can search by Departure Station or sort by Longes Distance, Shortest Distance, Longest Duration, Shortest Duration

## App Mobile Navigation 
![App Mobile Navigation](/media/mobile_nav_menu.jpg)
<br/>
look on the navigation on mobile devices

## Client (Frontend) && Server (Backend)
The frontend is built with [React](https://reactjs.org/) + [Typescript](https://www.typescriptlang.org/) while the backend uses only Typescript that is compiled into JavaScirpt after the initail setup-production is runned. The project was design with mobile and desktop support in mind <br>

## MongoDB
MongoDB was used in project for storing data. Data that was shared by dev academy had to be checked and cleand from duplicates, i personaly used [MongoDB extension](https://code.visualstudio.com/docs/azure/mongodb) on Visual Studio Code with aggregate querry you can find the file with the data in the root "db.stations.aggregate"

## Reflection
There's a lot of improvements to be made but still i manage pretty well for my first time with typescript fullstack project. I will continue to maintain this project and improving it by adding new aspects to it like profiles, payments and so on.. in time.

Station data is owned by [HSL](https://www.avoindata.fi/data/en_GB/dataset/hsl-n-kaupunkipyoraasemat/resource/a23eef3a-cc40-4608-8aa2-c730d17e8902?inner_span=True).<br> 
