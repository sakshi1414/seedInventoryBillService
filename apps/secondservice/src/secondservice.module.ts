import { Module } from '@nestjs/common';
import { SecondserviceController } from './secondservice.controller';
import { SecondserviceService } from './secondservice.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BILLS',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://use;password@localhost:5672'],
          queue: 'bill_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ])
  ],
  controllers: [SecondserviceController],
  providers: [SecondserviceService],
})
export class SecondserviceModule {}
