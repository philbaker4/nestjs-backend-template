
require('dotenv').config();
const ormConfig = {
    "type": "mysql",
    "port": 3306,
    "migrationsTableName": "custom_migration_table",
    "migrations": ["dist/migrations/*.js"],
    "cli": {
       " migrationsDir": "migrations"
    },

   username: process.env.DB_USERNAME,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
   host: undefined, 
   socketPath: undefined,
   extra: {},
  };

if (process.env.NODE_ENV === 'production') {
   ormConfig.host = `/cloudsql/${process.env.CLOUD_SQL_CONNECTION_NAME}`
   ormConfig.extra = {
     socketPath: `/cloudsql/${process.env.CLOUD_SQL_CONNECTION_NAME}`
   }
 }
//  Dev cloud DB
//  else if (process.env.NODE_ENV === 'development') {
//    ormConfig.host = '34.67.162.248'
//    ormConfig.socketPath = `/cloudsql/${process.env.CLOUD_SQL_CONNECTION_NAME}`
//  }

// Local Dev
 else if (process.env.NODE_ENV === 'development') {
   ormConfig.host = 'localhost'
 }
  export = ormConfig;