```diff
-Since free tier of heroku and netlify is used for deployment if backend and frontend respectively it may crash/sometime not run in that case please run the app locally
+Code is 100% functional
```
To run locally <br />
-add .env file in the backend folder and place the following in it:
<pre>
              MONGO_URI=mongodb+srv://Husien:8767152619@nodeexpressprojects.jvdg3.mongodb.net/Brainnest-Api?retryWrites=true&w=majority
              PORT=5000
</pre></br>
-cd to baceknd folder from the terminal<br />
-run the command "npm install && npm start" to start the backend<br/>
-and after that cd to the parent directory/folder in which github repo is cloned in other terminal and type in command "npm install && npm start" to start the frontend</br>
the deployed version is making requests to https://husien-crud-api.herokuapp.com/api/v1 where the Node.js api is deployed while this version in repo is making request locally to the local hosted server http://localhost:5000/api/v1
