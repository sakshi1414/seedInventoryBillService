import { Controller, Get } from '@nestjs/common';
import { SecondserviceService } from './secondservice.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class SecondserviceController {
  constructor(private readonly secondserviceService: SecondserviceService) {}

  @Get()
  getHello(): string {
    return this.secondserviceService.getHello();
  }

  @EventPattern('Billissued')
  async printBillNumber(data:any){
    console.log(data);
  }}
