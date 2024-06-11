## Project Installation
clone mabel-zhou-daily-spark repo:
- cd server
  - npm install
  - create a .env like the .env.sample 
  - npx knex migrate:latest
  - npx knex seed:run
  - npm start

- cd client
  - npm install
  - npm run dev

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
- As a user, I want to be able to filter through my previous entries by date and by typed keywords.
- As a user, I want to be able to edit previous gratitude entries, if I change my mind or have things to add.
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

### Screenshots

#### Home Page

![home](https://github.com/LuckyMabel/mabel-zhou-daily-spark/assets/164692455/ce6ccea1-1639-41e8-a29e-98c5f9ef077d)

#### View Entries Page

![view-entries](https://github.com/LuckyMabel/mabel-zhou-daily-spark/assets/164692455/dcae3f04-a6c4-4018-afa6-58193c54498c)

#### Add Entry Page

![add-entry](https://github.com/LuckyMabel/mabel-zhou-daily-spark/assets/164692455/6ffe8fb9-e32f-464e-8c01-c7546a8b398e)

#### Edit Entry Page

![edit-entry](https://github.com/LuckyMabel/mabel-zhou-daily-spark/assets/164692455/885dab0f-9e4d-488b-821d-a9356ac99ff0)

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

### Lessons Learned
- Importance of a clean, intuitive interface for user engagement.
- Efficient state management is crucial for handling asynchronous data fetching and updates.
- Handling API requests with axios and managing asynchronous data flow.
- Creating reusable components (e.g., EntryListItem, Quote) helps in maintaining and scaling the codebase.
- Managing form inputs and validations effectively to ensure data integrity.

## Next Steps

- Integration with social media for sharing entries.
- Integrate data visualization libraries such as Chart.js to provide insights into entries (e.g., mood trends, word clouds).
- Improve assessibility by ensuring the application meets WCAG (Web Content Accessibility Guidelines) standards.

