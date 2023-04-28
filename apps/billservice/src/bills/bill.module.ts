import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BILL_MODEL, BillSchema } from "../schemas/bill.schema";
import { BillsService } from "./bill.service";
import { BillsController } from "./bill.controller";
import { PRICE_MODEL, PriceSchema } from "../schemas/price.schema";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports:[
      
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/orders/.env',
    }),
     
        MongooseModule.forFeature([{
        name:BILL_MODEL, 
        schema:BillSchema
    }]),
    MongooseModule.forFeature([{
        name:PRICE_MODEL, 
        schema:PriceSchema
    }]),
    ClientsModule.register([
        {
          name: 'BILL_SERVICE',
          transport: Transport.RMQ,
          options: {
            urls: ['amqp://user:password@localhost:5672'],
            queue: 'jeLagelTiService_queue',
            queueOptions: {
              durable: false
            },
          },
        },
      ]),

],
    controllers: [BillsController],
    providers:[BillsService],
    exports:[BillsService],
})

export class BillsModule{}