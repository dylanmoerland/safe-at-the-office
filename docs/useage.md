# Useage

## Installation

## 1. Setting up firebase

Beforer starting make sure you're using your companies google suite account if you have one. This will make it possible

### 1.1 Creating a project

Go to the firebase console https://console.firebase.google.com/

Click create project and follow the steps

### 1.2 Create a database

In your recently created project, go to database and click create database

### 1.3 Setup database

In your recently created database, create 2 collections, `config` and `visit`.

For the `config` collection add the following fields

Document ID: auto id

Field: daysLimit, Type: number, Value: number of days allowed to plan in the future
Field: peopleLimit, Type: number, Value: number of people allowed at the office per day
Field: startDate, Type: datetime, Value: yesterday 12 o'clock

click create

[img src="1_3_config.png"]
![alt config](https://github.com/dylanmerland/safe-at-the-office/blob/master/docs/images/1_3_config.png?raw=true)

For the `visit` collection add the following fields

Document ID: auto id

delete all fields

click create

### 1.4 Securing the database

In your recently created database go to `rules`. Edit the rule so that only your company domain is allowed by replacing `your-company-domain` with the correct one.

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if (request.auth.token.email.matches('.*@your-company-domain[.]com$') &&
        request.auth.token.email_verified)
    }
  }
}
```

![alt config](https://github.com/dylanmerland/safe-at-the-office/blob/master/docs/images/1_3_visit.png?raw=true)

## 2. Installation

### 2.1 Checking out the project

`$ git clone git@github.com:dylanmoerland/safe-at-the-office.git`
`$ cd safe-at-the-office`
`$ yarn install`

### 2.2 Configuration

In the root of the project create a `.env` file (for a development environment create `.env.development`).
You can use the `.env.example` as an example for you `.env` file, just fill in the correct values for every variable.

### 2.3 Setting up firebase

`$ firebase init`

Selet `Hosting` with space and press enter

Select `Use an existing project` and press enter

Select `the project you created in step 1.1` and press enter

for `What do you want to use as your public directory?` type: `build` and press enter

for `Configure as a single-page app (rewrite all urls to /index.html)?` type: `y` and press enter

## 3. Deployment

### 3.1 Deploying to firebase hosting

In the root of the directory

`$ yarn deploy`
