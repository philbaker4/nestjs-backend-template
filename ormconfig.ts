import { Item } from "@/items/entity/item.entity";
require('dotenv').config();
const ormConfig = {
    "type": "mysql",
    "port": 3306,
    "migrationsTableName": "custom_migration_table",
    migrations: [
        'dist/src/migrations/*.js',
    ],
    cli: {
        migrationsDir: 'src/migrations',
    },
    entities: [
        Item
    ],
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
//    ormConfig.host = process.env.CLOUD_SQL_HOST
//    ormConfig.socketPath = `/cloudsql/${process.env.CLOUD_SQL_CONNECTION_NAME}`
//  }

// Local Dev
 else if (process.env.NODE_ENV === 'development') {
   ormConfig.host = 'localhost'
 }
  export = ormConfig;