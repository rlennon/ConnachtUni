| Author: Matthew Erler - L00156780 |
|-----------------------------------|
In this demo we will see
•	How to install the nginx web server on an EC2 instance.
•	How to create an Angular project, build it, deploy it* and view the home page in a browser.

How this demo fits into our project
•	We will have the requisite knowledge to get a simple “hello world” web site up and running.  
•	We can use the nginx install steps to configure Staging and Production EC2 instances.  
•	We can use the nginx and Angular install steps can to configure a build server.  

How this demo fits into the DevOps practice
Configured EC2 instances able to build and host our site are necessary components in the following:
•	Automate code builds, tests, and deployments
•	Continuous integration

*This is non-optimal


# Install nginx
 Type the following at the command line: **sudo amazon-linux-extras install nginx1**
 Test the nginx install -
  Start nginx: **sudo service nginx start**
  Get default home page from localhost: **curl http://localhost**
  Stop nginx: **sudo service nginx stop**

# Install Node.JS on an Amazon EC2 Linux instance

  Install node version manager (nvm) by typing the following at the command line: **curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash**
  Activate nvm by typing the following at the command line:  **. ~/.nvm/nvm.sh**
  Use nvm to install the latest version of Node.js by typing the following at the command line: **nvm install node**

# Install Angular CLI (Command Line Interface) so that "ng" commands can be run

Type the following at the command line: **npm install -g @angular/cli**

# Create an Angular application
Type the following at the command line: **ng new my-demo-app**

# Build the Angular project
cd into the project folder
Type the following at the command line: **ng build**

# Copy the Angular application to the nginx document root folder
**cd**
**cd /my-demo-app/dist/my-demo-app**
**sudo cp * /usr/share/nginx/html**

# Start nginx
**sudo service nginx start**

Now from your laptop open a browser and navigate to the the nginx home page.  You should see the default home page for an Angular application.

# What is Node.JS
Node. js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. 