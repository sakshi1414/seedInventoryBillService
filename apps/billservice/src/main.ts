import { NestFactory } from '@nestjs/core';
import { MainModule } from './billservice.module';
import { ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
    urls: ['amqp://user:password@localhost:5672/'],
    queue: 'bill_queue',
    queueOptions: {
      durable: false
    },
  },

  });
  app.useGlobalPipes(new ValidationPipe({transform:true})); //validates using dto
  await app.listen(3009);
  await app.startAllMicroservices();
}
bootstrap();
