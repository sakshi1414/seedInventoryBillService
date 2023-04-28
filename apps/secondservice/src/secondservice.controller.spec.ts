import { Test, TestingModule } from '@nestjs/testing';
import { SecondserviceController } from './secondservice.controller';
import { SecondserviceService } from './secondservice.service';

describe('SecondserviceController', () => {
  let secondserviceController: SecondserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SecondserviceController],
      providers: [SecondserviceService],
    }).compile();

    secondserviceController = app.get<SecondserviceController>(SecondserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(secondserviceController.getHello()).toBe('Hello World!');
    });
  });
});
