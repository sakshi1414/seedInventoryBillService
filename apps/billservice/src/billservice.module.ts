import { DatabaseModule } from '@app/common/db.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BillsModule } from './bills/bill.module';
import { DbModule } from './database/databse.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:"./apps/billservice/.env"
    }),
    DatabaseModule,
    BillsModule,
    DbModule
    ],
    controllers:[],
    providers:[],
})
export class MainModule {}
