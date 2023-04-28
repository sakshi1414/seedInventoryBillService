import { Injectable } from '@nestjs/common';

@Injectable()
export class SecondserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}
