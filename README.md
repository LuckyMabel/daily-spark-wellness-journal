# Project Title

Daily Spark

## Overview

Daily Spark is designed to help users cultivate a habit of gratitude by allowing them to document and reflect on things they are grateful for daily.

### Problem

Expressing gratitude has numerous benefits for mental health (e.g., increased happiness and empathy, reduced anxiety and stress), but many people struggle to make it a consistent habit. There is no dedicated, user-friendly platform for individuals to consistently record and reflect on their gratitude entries, which can lead to missed opportunities for personal growth and mental well-being.

### User Profile

- Users who seek to:
  - Improve their mental health through regular gratitude journaling.
  - Document and reflect on their daily lives.
  - Enjoy a simple and pleasant journaling experience.

### Features

- As a user, I want to be able to submit daily entry of gratitude, without needing to create an account.
- As a user, I want to be able to view previous gratitude entried, sorted by date.
- As a user, I want to be able to edit previous gratitude entries.
- As a user, I want to be able to delete previous gratitude entries.
- As a user, I want to be able to view daily reflection prompts or inspirational quotes to encourage gratitude.
- As a user, I want the journaling application to have an aesthetic and calming design to enhance the journaling experience.

## Implementation

### Tech Stack

- Frontend:
  - React
  - JavaScript
  - SASS
  - Client libraries:
    - react
    - react-router
    - axios
- Backend:
  - Node.js
  - Express
  - MySQL
  - Server libraries:
    - knex
    - express
    - cors
    - dotenv
    - nodemon

### APIs

- To implement the daily reflection prompts feature, I will the Quotable API (https://api.quotable.io)

### Sitemap

- Home page
- View previous entries page
- Add entry page
- Edit entry page

### Mockups

#### Home Page

![](home.jpeg)

#### View Entries Page

![](view-entries.jpeg)

#### Add Entry Page

![](add-entry.jpeg)

#### Edit Entry Page

![](edit-entry.jpeg)

### Data

Gratitude Entries Table:

- This table will store all gratitude entries submitted by users.
- Each entry will be associated with an id, timestamp, and a quote-of-the-day.

  - The quote-of-the-day will be retrieved from the API and stored in the database.

- Sample creation of the table:
  CREATE TABLE gratitude_entries (
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  quote_of_the_day TEXT
  );

### Endpoints

**POST/entries**

- Create a gratitude entry.

Parameter:

- content: Content of the entry
  {
  "content": "Today, I am grateful for the sunshine."
  }

- When a new entry is created, fetch the daily quote from the API and store it in the quote_of_the_day field.

Response:

{
"id": 1,
"content": "Today, I am grateful for the sunshine.",
"timestamp": "2024-05-28T10:00:00Z",
"quote_of_the_day": "Gratitude is the fairest blossom which springs from the soul."
}

**GET /entries**

- Retrieve all gratitude entries.

Response:

[
{
"id": 1,
"content": "Today, I am grateful for the sunshine.",
"timestamp": "2024-05-28T10:00:00Z",
"quote_of_the_day": "Gratitude is the fairest blossom which springs from the soul."
},
...
]

**GET /entries/:id**

- Retrieve a specific gratitude entry by its ID.

Parameters:

- id: ID of gratitude entry

Response:

{
"id": 1,
"content": "Today, I am grateful for the sunshine.",
"timestamp": "2024-05-28T10:00:00Z",
"quote_of_the_day": "Gratitude is the fairest blossom which springs from the soul."
}

**PUT /entriess/:id**

- Update the content of an existing gratitude entry.

Parameters:

- id: ID of gratitude entry
- content: New content of the entry

  {
  "content": "Today, I am grateful for the sunshine and a good book."
  }

Response:

{
"id": 1,
"content": "Today, I am grateful for the sunshine and a good book.",
"timestamp": "2024-05-28T10:00:00Z",
"quote_of_the_day": "Gratitude is the fairest blossom which springs from the soul."
}

**DELETE /entries/:id**

- Delete a specific gratitude entry by its ID.

Parameters:

- id: ID of gratitude entry

Response:

{
"message": "Entry deleted successfully"
}

### Auth

- No authorization will be used for Daily Spark.

## Roadmap

- Setup Project Repositories

  - Create client repository
  - Create server repository

- Initialize Projects

  - Set up React project for the client
  - Set up Express project for the server

- Set Up Database

  - Create Migrations: Define the migration script for creating the gratitude_entries table.
  - Create Seeds: Define seed data for initial entries if necessary.

- Create Client Structure

  - Set up routes and boilerplate pages

- Create Server Structure

  - Set up basic routing with placeholder 200 responses

- Implement Database Integration

  - Create and Run Migrations: Execute migration scripts to create the gratitude_entries table.
  - Create and Run Seeds: Populate the database with initial seed data if required.

- Develop Core Features

  - Feature: Create Gratitude Entry

    - Implement form on client side to submit gratitude entries
    - Create POST /entries endpoint on server
    - Integrate API to fetch and store daily quotes

    - Feature: List Gratitude Entries

      - Implement list view on client side to display entries
      - Create GET /entries endpoint on server

    - Feature: View Single Gratitude Entry

      - Implement detail view on client side to display a single entry
      - Create GET /entries/:id endpoint on server

    - Feature: Update Gratitude Entry

      - Implement update form on client side
      - Create PUT /entries/:id endpoint on server

    - Feature: Delete Gratitude Entry

      - Implement delete functionality on client side
      - Create DELETE /entries/:id endpoint on server

- Testing and Bug Fixes

  - Test all features for functionality and bugs
  - Fix any issues found during testing

- Demo Preparation

  - Prepare a demo of the application
  - Ensure all features are working smoothly

- Demo Day

  - Present the application
  - Gather feedback for future improvements

## Nice-to-haves

- Integration with social media for sharing entries.
- Search and filter options for previous entries.
- Mood tracking to correlate gratitude entries with mood changes.
