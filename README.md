
## Description

Starter repository for NestJS API with Auth0, TypeORM integrations. Prepped for GCP App Engine Deployment

## Installation

```bash
$ npm install
```

## Setup

#### Database

Download and install MySQL (https://www.mysql.com/downloads/). Set up a database server running locally. 

I typically use a MySQL Workbench (https://www.mysql.com/products/workbench/) to work with MySQL, but you can use whatever you want.

##### Adjusting DB Schema
When creating new or editing existing Entities (database tables), you must make sure they are in the entities array in ormconfig.ts

To generate a migration for the database, run command:
```bash
$ npm run typeorm:generate NameOfMigration
```
To run this migration, run command: 
```bash
$ npm run typeorm:run
```

#### Auth

Create an Auth0 account (https://auth0.com/) -- remember tenant domain as you will need it later in setup
Create an API -- remember the identifier you use as you will need it later in setup

#### Development

Create .env file of the following structure
```
PORT=3000
NODE_ENV=development

// Used for Auth0
// Account Domain
DOMAIN=myaccountdomain.auth0.com
// Auth0 API Identifier
AUDIENCE=https://apiidentifier.com

// Used for Cloudinary
CLOUDINARY_CLOUD_NAME=cloudname
CLOUDINARY_API_KEY=cloudkey
CLOUDINARY_API_SECRET=cloudsecret

// For TypeORM
DB_USERNAME=root
DB_PASSWORD=rootpassword
DB_NAME=dbname // schema name in MySQL

// For TypeORM when connecting to GCP DB
CLOUD_SQL_CONNECTION_NAME=gcpCloudSQLConnectionString
CLOUD_SQL_HOST=gcpCloudSQLIP
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment 

These are instructions to deploy to Google Cloud Platform App Engine (https://cloud.google.com/appengine)

Create app.yaml with at least the following info: 
```yaml
runtime: nodejs10
```

Customize app.yaml using this doc: https://cloud.google.com/appengine/docs/standard/nodejs/config/appref

Setup Cloud SDK (https://cloud.google.com/sdk), authenticate, set correct project

To deploy, run command: 
```bash
$ npm run deploy
```


## Support

NestJS docs can be found here: https://docs.nestjs.com/support.

