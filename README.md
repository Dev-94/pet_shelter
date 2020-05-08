This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Wireframe
- View the [wireframe](https://wireframe.cc/n3b6e7)

### Screenshots
Home: 
![Home Page][home]
![About Page][about]
![Application Page][apply]
![Login Page][login]


[home]: public/screenshots/home.png "Home Page"
[about]: public/screenshots/about.png "About Page"
[apply]: public/screenshots/apply.png "Application Page"
[login]: public/screenshots/login.png "Login Page"

### Necessary Technologies

- React.js
- Node.js
- MongoDB or PSQL
- Express
- SendGrid
- Twilio SMS
- Stripe
- ReactStrap
- React-Router-DOM
- RescueGroups.org API
- Google OAuth
- CSS
- HTML


### Pet Model
- Name: String
- Age: Number
- Type: String
- Color: String
- Location: String
- Price: Number

### User Model
- Name: String
- Email: String
- Approved: Boolean
- Phone: String

### MVP
The MVP has a front-end model of the app. It includes sample cards and pages. 

### Next Steps
- When clicked, each card routes to a detail page that provide further details and pictures for the selected animal via React, Node and Express.
- When submitted, one copy of the application is emailed to the admin, the other is sent to the user who applied via SendGrid.
- Build Admin portal for adding, updating, and removing animals.
- Admin ports also allows admins to promote certain animals that have been sheltered for an extended period of time via SendGrid and Twilio SMS.

