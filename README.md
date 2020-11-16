# Code4Sustainability_Chat

#### Chat server using socket.io

### Connecting developers with sustainable projects, initiatives and startUps.
**"Join for the challenge, stay for the people!"**

## About/Key values

* You want to spend your free time with great people while doing what you love?<br/>
**Awesome, subscribe and code for good!**
* You want to enhance this open-source project with your ideas and skills?<br/>
**Awesome, join the team or just fork and commit using feature branch!**
* You know great developers and sustainable projects?<br/>
**Awesome, share the platform and help making this world a little better place!**


# Stack

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/de/)
* [socket.io] (https://socket.io/) (realtime communication)
* GIT/GITHUB (code management)
* [MongoDB](https://www.mongodb.com/de) (NoSQL-datamanagementsystem)
* [Mongoose](https://mongoosejs.com/) (object modeling)
* [Trello](https://trello.com/) (project management)
* GIT/GITHUB (code management)

# How to run locally

- System requirements: [Node.js](https://nodejs.org/)
- Fork the repository
- Clone it to your local repo
- Run "npm install" to install dependencies
- Run "npm start" to run local server
- See .env.sample for environment variables

# Structure

| File                   | Description                                 |
| ---------------------- | ------------------------------------------- |
| chatServer.js          | Server and connection                       |
| dbConfig.js            | Configuration of database (MongoDB)         |
| Chat.js                | Model for mongoDB database                  |
| Message.js             | Model for mongoDB database                  |
| User.js                | Model for mongoDB database                  |
| verifyAuth.js          | Verification of valid refresh Token         |


## Important to know
* this project is set up as microservice architecture - "do one thing and do it well"
* all main features are seperated using different servers (see related projects)
* advantages: robust, scalable, compatible, independant
* ...and security first!

## Related projects

* [Code4Sustainability react App](https://github.com/Natascha2020/Code4Sustainability_APP.git)
* [Code4Sustainability resources server](https://github.com/Natascha2020/Code4Sustainability_API.git)
* [Code4Sustainability authentication server](https://github.com/Natascha2020/Code4Sustainability_Auth.git)
* [Code4Sustainability videoStreaming server](https://github.com/Natascha2020/Code4Sustainability_VideoStreaming.git)

## It's not a feature, it's a bug!

### Evolutions....

**...under coding:**
* OAuth 2.0 authentication with Google and GitHub
* lazy loading and endless scrolling for project list
* possibility to have multiple projects as project owner or developer
* possibility to have chat rooms with multiple people
* landing page: photo wall right and left sided
* image upload for profile page and avatar display

**...planned:**
* live recording of pitch videos directly on homepage
* possibility to send live recorded video or voicemail
* possibility to like projects
* ability to send projects via what's app etc. to friends
* filtering through projects on different topics, kind of challenges
* video chat possibility on match
* password reset
* email forgotten password
* world map with projects
* different languages: english and german etc.
