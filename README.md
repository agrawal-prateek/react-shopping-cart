# REACT SHOPPING CART
This project was made for'HACKEREARTH FRONTEND HIRING CHELLANGE' on sun, oct 1,2017
# To start the server open Terminal in root directory of project and type :

    npm start
    
# Open Browser and in the search bar type :


    http://localhost:3000
    Or you can type :
    http://127.0.0.1:3000/


# Install Required components :
    
    npm install -g babel
    npm install -g babel-cli
    npm install webpack --save
    npm install webpack-dev-server --save
    npm install react --save
    npm install react-dom --save
    npm install babel-core
    npm install babel-loader
    npm install babel-preset-react
    npm install babel-preset-es2015


# Folders and files specification

    "data" folder contains JSON file which was given in chellange
    any change in server will automatically refreshes the webpage on clint side
    "Jsx" folder contains ".jsx" files in which :
    
        - "itemsList.jsx" defines data of items to render on "index.html" from data.json
        - "resetButton.jsx" defines reset button for "index.html"
        - all ".jsx" files exports the classes so that "server.js" can import and render it on "index.html"
        
    "index.js" is a blank file but server renders all html content to it so it is needed to include
    "server.js" is a file which imports ".jsx" files from "Jsx" folder and takes components and render it to perticular "id of div on html page"
    "webpack.config.js" defines the structure of project
    "src" folder contains the sources for frontend
    
# FrontEnd specification

    Webpage is responsive and media queries was used to make it responsive
    "MDL (Googles's Material Design Light)" was used only for "shadow effect, animation and tabs" not for responsiveness and make the elements
    "Jquery" was used
    
# Functionality (How App works)
    
    - Start the server by typing 'npm start'
    - Navigate to http://localhost:3000
    - All the items those appears are rendered by server
    - Reset button will make app to default. It will use "AJAX" and get the "data.json" file from "/data/data.json" and load all the items to default.
    - "plus and minus buttons" will change the quantity of items and use 'AJAX' to check corresponding data of price and discount so the it can update right tab where "Total" is written.
    - Page will never reload it will use 'JQUERY AJAX'


Wrote with ❤️ by [Prateek Agrawal](https://www.linkedin.com/in/agrawal-prateek/)
