This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# PoliyCanva

## Technologies

##### Front-end:

- [ReactJS](https://reactjs.org/)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [React-Semantic UI](https://react.semantic-ui.com/)
- [React-Boostrap](https://react-bootstrap.github.io/)

##### Back-end:

- [NYC Open Data API](https://opendata.cityofnewyork.us/)
- [Google Civic API](https://developers.google.com/civic-information)
- [Faker Ruby Gem](https://rubygems.org/gems/faker)
- [JWT](https://jwt.io/)
- [BCrypt](https://rubygems.org/gems/bcrypt/versions/3.1.12)

## Project Description

### Status

Working Application; still in progress

### Motivation

My major in college was political science and I have worked on a few campaigns over the years and I have used different software that has helped track voter information. And with the recent 2020 election coming up, I wanted to make an application that resonated with me.

#### Purpose

The point of starting this project was figuring out how to organize voters based on their districts and putting them into lists for each candidate's campaign that the voter is able to vote for. So when any campaign's workers log on, they will have voters that only pertain to them and their districts.

The second part was that I wanted any edits made to one voter to be synced across all the campaigns that voter is eligible to vote for. In other words, if a local campaign adds a new voter they find canvassing or edits a current voter, I wanted any eligible local and/or federal campaign to also get access to that voter without the database creating duplicates. This way campaigns using this application for canvassing would have up to date voter information.

In real-life, a lot of this work would have already been done for me. Generally, when someone is registered to run for office, their campaign will receive access to the voter registrations of those who can vote for them.

**However, In my case, I was not a registered candidate running for office, so I was not entitled to registered voter information, it was too expensive to purchase the information that is legally available through the Board of Elections, and I could not use the information for non-election purposes so I decided that I would create a way to replicate this functionality myself.**

### Overview

I seeded my database with fictional voters. To do this, I used real NY addresses I got from the NYC Open Data API but I used the Faker Ruby gem for the names, gender, age, etc.

I then seeded the database with real candidates, NY Rep. Alexandria Ocasio-Cortez and NY Sen. Kirsten Gillibrand. All of the seeded voters were eligible for Sen. Gillibrand, but only those who are in NY Rep. Ocasio-Cortez's district in the Bronx get sorted into her list.

A campaign worker creates an account, they must get their campaign code from their campaign manager. I did this because I did want people in a real-world scenario to have access to any campaign's data. So the application will prompt the user to input their campaign code into their profile page and then they will be associated with a campaign. Now they can view, edit and log their voter's information and everyone who is one that campaign can see it.

## Instructions for Cloning Repo

- Clone the most recent branch in this repository
  > Make sure you are in the project path before running the commands
- Run `bundle install` in your bash-enabled terminal to make sure all dependencies are installed
- Run `rails db:create` to create a local PostgreSQL database
- Run `rails db:migrate` to create the schema for said database
- Run `rails db:seed` to seed the database
- Run `rails s` to start up a local server
- Navigate to `localhost:3000` to launch the web application
