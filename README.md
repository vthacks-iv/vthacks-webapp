# vthacks

> VTHacks - hackathon

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Development Flow

- Please create a new branch to work on a task `git checkout -b
  <yourname-task-name>`

- When you are done, please create a clean pull-request.

- It is up to you if you want to fork the repo and push to your own forked repo
  or just push to this repo.

- Please use 4 spaces and if possible use ESLINTER.

## Tools being used for development

- We are using VueJS framework with Firebase if you are new to one of them
  please read documentation:
    * [Vue.JS guide](https://vuejs.org/v2/guide/)
    * [Firebase guide](https://firebase.google.com/docs/)

- For the UI components, we are using a mix of Google Material and Bootstrap v4.
    * [Vuetify](https://vuetifyjs.com/)

- If any questions arises, please don't hesitate to create Github issue. Pinging
  one of us on the Vthacks-dev FB groupchat is a good way to let us know about
  the issue you created.


# List of features for VTHacks app
=================================

### Web App, iOS App and Android app
--------------------------------
1. Landing
2. Registration
3. Schedule + Map
  * A view just for VTHacks team to update the schedule
  * PUSH notifications to everyone (?)
4. List of teams, their submissions + table number (Check if DevPost has an
   API)
  * Once you register have a section to create a team or join a team.
5. Help request system
6. Resume database (only for sponsors to see) __Only for the web app?__
7. Chat system (low priority)


___Maybe we can have 4 and 5 as just one view.___


### API (no more API, but rather just Firebase)
---
1. User
  * Have ability to POST, GET, PATCH, DELETE its own content

  1. Name
  2. School
  3. Age (?)
  4. Gender
  5. Social media
  6. Resume
  7. Create/join team (no more than 4 ppl per team)
  8. Phone number (?)

2. Schedule
  * Have ability to GET, PATCH, DELETE the schedule
  * Flexibility to change times (?)

3. Teams
  * Ability to POST, GET, PATCH, DELETE a team

  1. Up to 4 ppl per team
  2. Generate a team number which will be their table number as well.
  3. Request help per team.

Contact: developers@vthacks.com
