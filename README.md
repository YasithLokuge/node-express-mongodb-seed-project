# node-express-seed-project
RESTful application using nodejs, expressjs and mongodb

<h2>Objective</h2>

The objective of the project is to create a basic structure for a RESTful application using nodejs, expressjs and mongodb.

<h2>Prerequisite</h2>
<br>
Download and install nodejs (https://nodejs.org/en/)
<br>
Download and install mongodb (https://www.mongodb.org/downloads#production)

<h2>Highlights</h2>

<br>
Logger based on Winston
<br>
Environment based configuration using config(https://www.npmjs.com/package/config#introduction)


<h2>Running the application</h2>

<ul>
<li>Clone the project</li>
<br>
git clone https://github.com/guptam2/node-express-mongodb-seed-project.git
<br>
<br>
<li>Install modules</li>
<br>
cd node-express-mongodb-seed-project
<br>
npm install
<br>
<br>
<li>Start the server</li>
<br>
node server.js
<br>
<br>
<li>Send a POST request</li>
<br>
<b>URL :</b> http://localhost:3000/contacts
<br>
<b>Request Body :</b> <p>{"first_name":"m", "last_name":"g","phone":"123456789", "address_line_1":"3 test road","address_line_2":"test city", "county":"berkshire","postcode":"tt1 2tt"}</p>
<b>Content Type :</b> application/json
<br>
<br>

<li>Send a GET request</li>
<br>
URL : http://localhost:3000/contacts
<br>
<br>
<li>Config</li>
<br>
<p>
Different config file can be loaded by setting the NODE_ENV environment variable
<br>
<br>
e.g. $export NODE_ENV=dev  
<br>
<br>
It will load the <basepath>\node-express-seed-project\config\dev.json
</p>

<li>Check the log</li>
<br>
<p>Default log file is C:\tmp\node-express-seed-project.log</p>
<p>
To change the log file location provide a config and set the NODE_ENV variable
<br><br>
e.g. New config <basepath>\node-express-seed-project\config\dev.json
<br><br>
export NODE_ENV=dev   
<br><br>
New log file is C:\tmp\node-express-seed-project-dev.log
</p>
</ul>



