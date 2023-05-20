Al-Afra E-commerce Website

This is a README file for a React-based e-commerce website that utilizes Firebase for the backend and HTML, CSS, and JavaScript for the frontend.

Deploy on netlify:
Link-https://comforting-cucurucho-6c081d.netlify.app

Introduction:
This project is a web application built using React, which serves as an e-commerce website. It allows users to browse products, add items to their cart, and complete purchases. Firebase is used as the backend to handle authentication, product data storage, and order management.

Features:
1-User authentication (sign up, sign in, sign out)
2-Browse and search products
3-Add items to the cart
4-Edit cart contents (update quantity, remove items)
5-Complete purchase (payment integration not included)
6-View order history
7-Firebase integration for backend services

Requirements:
To run this project, you need the following:

1-Node.js (v12 or higher)
2-npm (Node Package Manager)
3-Firebase account and project (with Firestore and Authentication enabled)

Installation
1-Clone the repository to your local machine:
git clone <(https://github.com/Abdullah7919/Al-Afra/edit/master/shop-commerce)>

2-Navigate to the project directory:
cd shop-commerce

3-Install the required dependencies:
npm install

Usage
To start the development server and run the application locally, execute the following command in the project directory:
npm start

The application will be accessible at http://localhost:3000

Firebase Configuration
Before running the application, you need to configure your Firebase project. Follow these steps:

1-Create a Firebase project in the Firebase console.
2-Enable the Firestore database and Authentication services for your project.
3-Obtain the Firebase configuration object for your project.
4-In the project directory, create a new file named .env.local.
5-Add the following content to the .env.local file:

REACT_APP_FIREBASE_API_KEY=<your-firebase-api-key>
REACT_APP_FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
REACT_APP_FIREBASE_PROJECT_ID=<your-firebase-project-id>
REACT_APP_FIREBASE_STORAGE_BUCKET=<your-firebase-storage-bucket>
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
REACT_APP_FIREBASE_APP_ID=<your-firebase-app-id>

  
Deployment
This application is deployed on Netlify. To deploy the application on Netlify, follow these steps:

Create an account on Netlify if you don't have one.
Connect your Netlify account to your Git repository.
Configure the build settings for the Netlify deployment (e.g., build command: npm run build, publish directory: build/).
Set the environment variables in the Netlify dashboard for Firebase configuration.
Trigger the deployment process in the Netlify dashboard.
  
Contributing
Contributions to this project are welcome. Feel free to open issues and submit pull requests.
