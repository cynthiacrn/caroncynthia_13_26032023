# Argent Bank: PROJECT 13 Frontend Developer, OPENCLASSROOMS course

This codebase contains the code needed to run the project.

## Getting Started

### Prerequisites

Argent Bank uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)
- [React](https://fr.reactjs.org/)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

### Instructions

1. Fork this repo
1. Clone the repo onto your computer
1. Open a terminal window in the cloned project
1. Run the following commands:

```bash
In a first command terminal:

# Set up server 
cd api/

# Install dependencies
npm install

# Start mongodb
service mongodb start

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```
Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

```bash
In a second command terminal:

# Set up server 
cd app/

# Install dependencies
npm install

# Start app
npm start
```
Your app should now be running at http://locahost:3000

## Populated Database Data

Once you run the `populate-db` script, you should have two users in your database:

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs


