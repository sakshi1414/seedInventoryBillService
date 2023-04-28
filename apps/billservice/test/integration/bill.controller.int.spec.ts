import { Test } from "@nestjs/testing"
import {MainModule} from "../../src/billservice.module"
import { Connection } from "mongoose"
import { DatabaseService } from "apps/billservice/src/database/database.service";
describe('BillsController',()=>{ //describin controller
    
    let dbConnection: Connection;
    
    beforeAll(async ()=>{ //this block will be executed before all

        const moduleRef = await Test.createTestingModule({
            imports:[MainModule]
        }).compile();

        const app = moduleRef.createNestApplication();
        await app.init() //initialise the application

        dbConnection=moduleRef.get<DatabaseService>(DatabaseService).getDbHandle();

    })

    describe('allBills', async()=>{
        await dbConnection.collection('')
    })
})