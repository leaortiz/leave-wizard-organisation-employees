# Welcome to:

![](assets/lw%20logo%20organisation%20employees.PNG)

Hi! as requested, here is your React.js site

# How to start the application

If you want to use the mock data you gave me on Appendix  **A – Dummy Api Data** just start the application by opening a powershell or cmd window and type the following commands, npm install followed by npm start.

To see the application with uat or prd data please goto src/config and edit the REACT_APP_API_URL env variable
at **uat.js** or **prd.js** to match your api url. 
Then goto components/OrganisationEmployees/OrganisationEmployees/OrganisationEmployees.jsx and edit line 26 to fith your needs (auth, headers, etc).
Open visual studio code, open a new terminal (Terminal/New Terminal) and run the following commands: npm i followed by **npm run start:uat** or **npm run start:prd**, if you want to see it with the dummy api data just run the command npm start

If you want to build it and host it in ISS, open a cmd window and run the command build.cmd when the command finish you will see a two new folders called Output and Build inside Output subfolders you will see uat, prd builds in Build folder is the local one.



