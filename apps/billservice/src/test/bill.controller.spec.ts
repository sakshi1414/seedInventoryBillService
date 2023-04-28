import { Test, TestingModule } from "@nestjs/testing";
import { BillsController } from "../bills/bill.controller";
import { BillsService } from "../bills/bill.service";


describe("BillsController", () => {
  let billsController: BillsController;

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BillsController],
      providers: [
        BillsService, //We imported the service that our controller uses/depends.
      ],
    }).compile();
    billsController = app.get<BillsController>(BillsController);
  });
});