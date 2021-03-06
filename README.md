# Tech-Blog

## Table of contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Screenshot](#screenshot)
- [Demonstration](#demonstration)
- [Deployed application](#deployed-application)
- [GitHub repository](#github-repository)
- [Questions](#questions)

## Description

I have been tasked to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. I’ll build this site completely from scratch and deploy it to Heroku. My app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Installation

Start with cloning this repository link on to your local machine:

```
$ git clone https://github.com/riz1ash786/tech-blog
$ cd tech-blog
```

To install the required dependencies and set up the application, run:

```
$ npm i
$ source schema.sql
$ npm run seed
$ node server.js
```

You will also need to place a .env file in the root directory of the project, in order to connect to your MySQL database. Here's a specific example:

file: .env

```
DB_NAME=tech_db
DB_USER=root
DB_PASSWORD=
```

## Usage

Enter `node server.js` in terminal to start the application. Once a port has been presented in terminal then type `localhost:3001` into browser to display the application locally. Alternatively, if you wish to deploy this application on Heroku then please click here on the [Heroku Link](https://tech-blog-rizwan.herokuapp.com/ "Heroku Link")

## Contributing

There are no contributing guidelines at this moment in time. Please check back in the future.

## Tests

No test specified as of yet.

## License

![License (ISC](https://img.shields.io/badge/License-ISC-brightgreen.svg) <br />
This application utilises the [ISC License](https://opensource.org/licenses/ISC "License Link")

## Screenshot

![Homepage](assets/images/homepage.png)

![Login](assets/images/login.png)

![Create Post](assets/images/create-post.png)

![Edit-Delete](assets/images/edit-delete-post.png)

## Demonstration

[Heroku Demo Video](https://drive.google.com/file/d/1nJgxm1AoNhzgan5TNO21paawBq8BYh94/view?usp=sharing "Heroku Demo Video")

## Deployed Application

[Tech-Blog Heroku Link](https://tech-blog-rizwan.herokuapp.com/ "Heroku Link")

## GitHub Repository

[Tech-Blog Repository](https://github.com/riz1ash786/tech-blog "Repository Link")

## Questions

If you have any additional questions then please feel free to get in touch via my github or email details linked below. Thank you.

Github - https://github.com/riz1ash786 <br />
Email - riz1ash786@gmail.com
