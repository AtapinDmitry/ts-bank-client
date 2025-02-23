import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './src/AppModule';
import { AppSettings } from './src/AppSettings';
import { DefaultLogger } from '@ts-core/backend-nestjs';

async function main(): Promise<void> {
    let settings = new AppSettings();
    let logger = (settings.logger = new DefaultLogger(settings.loggerLevel));

    let application = await NestFactory.create(AppModule.forRoot(settings), { logger, bodyParser: true });
    application.useLogger(logger);

    logger.log('Application started');
}

main();
