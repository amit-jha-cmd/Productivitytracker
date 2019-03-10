# Guide to run the project

1. Open terminal inside the project folder
    >node app.js

    This will start the express server in this directory

    _Make sure you have [node](www.nodejs.com) installed_

2. Navigate to clientApp directory in terminal
    >npm start

    This will start the client application

## Note
1. Make sure you are connected to the internet
2. Install MongoDB server before running the above commands
3. Make sure that the mongoDB is running otherwise application will show error

## How to setup the container & table in MongoDB
### Terminal
1. Connect to the MongoDB server
    >cd "Program Files"/mongodb/db/4.0/bin/

    make sure to replace _4.0_ with your version number

    >mongod.exe

    The above command should start the server and the MongoDB terminal

    In the MongoDB terminal run the following command to make sure that there is not database with the name _Productivity_Tracker_
    
    >show dbs

    You should see something like this
    ```
    admin                 0.000GB
    config                0.000GB
    local                 0.000GB
    ```

    Run the command give below to create a database

    > use Productivity_Tracker

    This will create a database named _Productivity_Tracker_

    You should see something like this

    ```
    switched to db Productivity_Tracker
    ```

    
