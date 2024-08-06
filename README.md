To run an Express server that allows you to share files over the same network, you’ll need to set up a basic Express application and serve the files from a directory. Here’s a step-by-step guide:

Step 1: Set Up Your Project
Create a New Directory for Your Project:

bash
Copy code
mkdir express-file-server
cd express-file-server
Initialize a New Node.js Project:

bash
Copy code
npm init -y
Install Express:

bash
Copy code
npm install express
Step 2: Create the Express Server
Create a File Named server.js:

javascript
Copy code
const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // You can choose any port that's available

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
This code snippet sets up an Express server that serves files from a directory named public.

Step 3: Prepare Your Files
Create a public Directory:

bash
Copy code
mkdir public
Add Files to the public Directory:

You can place any files you want to share in this directory. For example, you might add index.html, image.jpg, or any other files.

Step 4: Run Your Server
Start Your Server:

bash
Copy code
node server.js
You should see the message Server is running at http://localhost:3000.

Access Your Files:

On the same machine, you can access the files by going to http://localhost:3000/filename. For example, if you have index.html in the public directory, you can access it at http://localhost:3000/index.html.
