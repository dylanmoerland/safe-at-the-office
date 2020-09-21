# Safe at the office

We're living during a global pandamic right now and in many countries this has changed our day to day lives quit drastically. Where I live, The Netherlands, we have a pollicy of working at home as much as possible and keeping your distance when you do have to come together. At my office we don't have the room to all be there at the same time and keep the required distance. So we set a limit for the amount of people allowed to be at the office for a given day. And I didn't like typing in a form, so I build an application to make managing this a lot easier! And I thought more people are probably facing this issue so I made it open source, so here it is! And completely free to host and manage all thanks to Google firebase ❤️

# Usage

Right now you can only login using a Google or a Microsoft account. You should only use this when you have a Google or Microsoft account with your own domain, this way you can secure the access to only people with a such an account.

If you really really really want to use this but your company doesn't use Google or Microsoft open an issue and with enough requests I'll create another option to manage access.

## Installation

## 1. Setting up firebase

Before starting, make sure you're using your companies Google suite account if you have one. This will make it possible to enable domain based security.

### 1.1 Creating a project

Go to the firebase console https://console.firebase.Google.com/

Click create project and follow the steps

### 1.2 Create a database

In your recently created project, go to Develop > Cloud Firestore and click create database

### 1.3 Setup database

In your recently created database, create 2 collections, `config` and `visit`.

For the `config` collection add the following fields

Document ID: auto id

Field: daysLimit, Type: number, Value: number of days allowed to plan in the future

Field: peopleLimit, Type: number, Value: number of people allowed at the office per day

Field: startDate, Type: datetime, Value: yesterday 12 o'clock

click `save`

![image](https://github.com/dylanmoerland/safe-at-the-office/blob/master/docs/images/1_3_config.png)

For the `visit` collection add the following fields

Document ID: auto id

delete all fields

click `save`

![image](https://github.com/dylanmoerland/safe-at-the-office/blob/master/docs/images/1_3_visit.png)

### 1.4 Securing the database

In your recently created database go to `rules`. Edit the rule so that only your company domain is allowed by replacing `your-company-domain.com` with the correct one.

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if (request.auth.token.email.matches('.*@your-company-domain.com$') &&
        request.auth.token.email_verified)
    }
  }
}
```

And click publish

![image](https://github.com/dylanmoerland/safe-at-the-office/blob/master/docs/images/1_4_rules.png)

## 2. Installation

### 2.1 Checking out the project

`$ git clone git@github.com:dylanmoerland/safe-at-the-office.git`
`$ cd safe-at-the-office`
`$ yarn install`

### 2.2 Configuration

In the root of the project create a `.env` file (for a development environment create `.env.development`).
You can use the `.env.example` as an example for you `.env` file, just fill in the correct values for every variable.

All firebase values can be found in the firebase console in your recently created project

`REACT_APP_COMPANY_NAME=` (Set a company name to be displayed (optional))

`REACT_APP_AUTH_PROVIDER=` (Set the auth provider you want to use (Google | Microsoft))

`REACT_APP_FIREBASE_API_KEY=` (can be found in the firebase console in your recently created project)

`REACT_APP_FIREBASE_AUTH_DOMAIN=` (can be found in the firebase console in your recently created project)

`REACT_APP_FIREBASE_DATABASE_URL=` (can be found in the firebase console in your recently created project)

`REACT_APP_FIREBASE_PROJECT_ID=` (can be found in the firebase console in your recently created project)

`REACT_APP_FIREBASE_STORAGE_BUCKET=` (can be found in the firebase console in your recently created project)

`REACT_APP_FIREBASE_MESSAGING_SENDER_ID=` (can be found in the firebase console in your recently created project)

`REACT_APP_FIREBASE_APP_ID=` (can be found in the firebase console in your recently created project)

`REACT_APP_FIREBASE_APP_ID=` (can be found in the firebase console in your recently created project)

`REACT_APP_FIREBASE_MEASUREMENT_ID=` (can be found in the firebase console in your recently created project)

`REACT_APP_ALLOWED_DOMAINS=your-company-domain.com` (if multiple split them by `,`)

`REACT_APP_PEOPLE_LIMIT=6` (this will be overwridden by configuration set in the config collection in firebase)

`REACT_APP_DAYS_LIMIT=21` (this will be overwridden by configuration set in the config collection in firebase)

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

# Development

[Development documentation](https://github.com/dylanmoerland/safe-at-the-office/blob/master/docs/development.md)
