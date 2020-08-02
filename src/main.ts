import 'module-alias/register';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
// import * as helmet from 'helmet'
const helmet = require('helmet')

require('dotenv').config()
import * as Express from 'express';
import * as cors from 'cors';

import { AppModule } from './app.module';

const server = Express();
server.use(helmet());
server.use(cors());
server.get('/', (req, res) => res.send('ok'));
server.get('/_ah/health', (req, res) => res.send('ok'));
server.get('/_ah/start', (req, res) => res.send('ok'));

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  // app.setGlobalPrefix('api');
  await app.listen(process.env.PORT);
}
bootstrap();