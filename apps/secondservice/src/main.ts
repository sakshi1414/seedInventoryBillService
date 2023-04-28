import { NestFactory } from '@nestjs/core';
import { SecondserviceModule } from './secondservice.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(SecondserviceModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
    urls: ['amqp://user:password@localhost:5672/'],
    queue: 'jeLagelTiService_queue',
    queueOptions: {
      durable: false
    },
  },
});
  await app.listen(3010);
  await app.startAllMicroservices();
  
}
bootstrap();
