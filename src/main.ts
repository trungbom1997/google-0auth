import * as session from 'express-session';
import * as dotenv from 'dotenv';
import * as passport from 'passport'
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getRepository } from 'typeorm';
import { Session } from './db/models/Session.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const sessionRepository = getRepository(Session);
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60000,
      },
    }),
  );
  // init 'passport' (npm install passport)
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(process.env.PORT, () => {
    console.log('Server running in port:', process.env.PORT);
  });
}
bootstrap();
