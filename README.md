# Mindful Muscle Client version 1.0

## This is the front end client to the Mindful Muscle application!

In this app you can generate a unique exercise plan by entering in a few fields of data. This application was created to simplify one aspect of the complicated process for building a healthier life.

## Demo Accounts

While this Application is best experienced by creating a new user and selecting plans yourself. I have provided a few demo accounts below to log in and see example exercise plans.

1. Username: testUser1 Password: thisISsecure1$ Plan: Gain Strength, 2x a week, no equipment
2. Username: testUser2 Password: thisISsecure1$ Plan: Gain Muscle Hypertrophy, 3x a week, no equipment
3. Username: testUser3 Password: thisISsecure1$ Plan: Gain Endurance, 4x a week, Resistence Bands
4. Username: testUser4 Password: thisISsecure1$ Plan: Burn Fat, 5x a week, Gym Membership
5. Username: testUser5 Password: thisISsecure1$ Plan: none (first tester can select)
6. Username: testUser6 Password: thisISsecure1$ Plan: none (first tester can select)


## User stories
As a visitor:
1. you can sign up and create a user!

As a user:

1. You can select an exercise goal.
2. You can select how often you want to exercise.
3. You can select what resources you have (gym membership, resistance band, no equipment)
4. you can recieve a personalized exercise plan based off of all these fields.
5. You will recieve general information regarding each and every exercise.
6. You will recieve specific information and a video for each exercise to ensure proper form.
7. Every dashboard will provide advice to help the user to reach their goals.

## Set up (for local use)
1. clone this client to a local directory
2. npm install to ensure all dependencies are installed.
3. download and run the Mindful Muscle server following its instructions.
4. npm start command to launch server.

## Tech Stack

Fontend: React.js, Create React App (webpack)
Server: Node.js, express, Knex
Database: Postgres SQL

## API overview

/api
.
├── /auth
│   └── POST
│       ├── /login
├── /users
│   └── GET
│   └── GET /:id
│   └── POST
│       └── /
├── /exercises
│   └── GET
│       ├── /
├── /adex
│   └── GET
│   └── GET /:id
│   └── POST
│       ├── /
│   └── DELETE
│       ├── /:id
├── /epex
│   └── GET /:name
├── /filter
│   └── GET /:filter-:equipVal-:priority

## API documentation
* POST api/auth/login

// req.body
{
  username: String,
  password: String
}

// res.body
{
  authToken: String
}

* GET api/users
// res.body
[
  {
    username: String
  }
]
* GET api/users/:id
// res.body 
{
  username: String
}

* POST api/users
// req.body
{
  username: String,
  password: String
}

// res.body
{
  username: String
}
* GET api/exercises
//res.body
[
  {
    exercise_name: String
    exercise_description: String
    exercise_instructions: String
    exercise_target: String
    exercise_frequency: Number
    equipment_value: Number
    link: String
    gain_strength: Boolean
    gain_muscle: Boolean
    lose_weight: Boolean
    endurance: Boolean
  }
]
* GET api/adex
// res.body
[
  {
    username: String
    exercise_id: Number
    goal: String
    frequency: Number
  }
]
* GET api/adex/:id
// req.header
Authorization: Bearer ${token}

// res.body
  {
    username: String === id
    exercise_id: Number
    goal: String
    frequency: Number
  }

* POST api/adex
  // req.body
{
  user_name: String,
  exercise_id: Number,
  frequency: Number,
  goal: String
}

// res.body
{
  user_name: String,
  exercise_id: Number,
  frequency: Number,
  goal: String
}

* DELETE api/adex/:id
//req.body
{
  id: number
}
* GET api/epex/:name
// req.header
Authorization: Bearer ${token}

// res.body
[
  {
    username: String === name
    exercise_id: Number
    goal: String
    frequency: Number
  }
]
* GET api/filter/:filter-:equipVal-:priority
// req.header
Authorization: Bearer ${token}

// res.body
[
  {
    exercise_name: String
    exercise_description: String
    exercise_instructions: String
    exercise_target: String
    exercise_frequency: Number <= priority
    equipment_value: Number === equipVal or 1
    link: String
    gain_strength: Boolean === filter
    gain_muscle: Boolean === filter
    lose_weight: Boolean === filter
    endurance: Boolean === filter
  }
]

![Mindful Muscle](https://raw.githubusercontent.com/Mark-The-Dev/Mindful_Muscle_Client/master/public/mm-meta.png)

## Live Link

[Mindful Muscle](https://m-muscle-client.vercel.app)


## About Me

* [GitHub Profile](https://github.com/Mark-The-Dev)
* [LinkedIn](https://www.linkedin.com/in/mark-marcello-8896481b1)

## Special Thanks!

Special thanks to Thinkful's software engineering immersion program for inspiring me to create this application.

## Future version features

Version 2.0 will include:

* Ability to remove user's plan
* Ability to add a new plan from different inputs
* an extra custom workout plan per user that is selected by them.
