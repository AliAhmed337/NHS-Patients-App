# medapp-nhs
Team DANF (Internal Readme to be replaced)

Introduction to React

Steps for this project to work (should work on both mac and windows):

1. Install the latest version of node @ https://nodejs.org/
2. We need the expo client so go to terminal and type: npm install -g expo-cli
3. Clone this repository (imo use github desktop)
4. Install Expo app on your phone
5. In terminal travel to the directory in terminal where this project is located
6. Type npm install to get all the dependencies for the project
7. Type npm start to spin up a development server
8. Should be presented with a QR code that you can scan using the app
9. You now can make changes and see live updates to the application

All information regarding React including Documentation found here:

https://facebook.github.io/react-native/docs/getting-started

I heavily advise getting to grips with the docs.

Differences between this and other projects you may have come across:

- There is a screens folder containing all our scenes, like home and settings. You may be more familiar with putting them directly in the components folder, but understand that a screen encompasses multiple components. 

- The database will only be initialized and then used as an import where needed, within the dbconfig file.

- This Project requires that you read through the project hierarchy and understand the different aspects. The only thing you should ignore is node_modules and .idea folders.
