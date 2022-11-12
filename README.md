
# TP node

Creating an api with a front-end in React js and
 a MongoDB database with docker


## Run Locally

Clone the project

```bash
  git clone https://github.com/Lucas-Malatchoumy/TP-node/tree/develop
```

Go to the project directory

```bash
  cd TP-node
```

Create folder for database volume :

```bash
  mkdir mongo
```

Create .env file to store your JWT Key  :

`JWT_KEY='Your key here'`


Start and build the app with docker compose :

```bash
  docker-compose up --build (-d) .
```


## Features

- Login / Sign up
- Show posts
- Create posts (only admin)
- Sign out


## Create admin account

To create admin account, you need to change the role by default to "admin" in /server/api/controllers/userController.js :

```javascript
let newUser = new User({ ...req.body, role: "user" });
```
After save the change, you can Sign up and you will see the link to create posts


## Tech Stack

**Client:** React, Bootstrap, React-query

**Server:** Node, Express

**Database:** MongoDB

