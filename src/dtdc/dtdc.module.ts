import { Module } from '@nestjs/common';
import { DtdcController } from './dtdc.controller';
import { DtdcService } from './dtdc.service';
import { MongooseModule } from '@nestjs/mongoose';
import { dtdcSchema } from './schemas/dtdc.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'Dtdc',schema:dtdcSchema}])],
  controllers: [DtdcController],
  providers: [DtdcService]
})
export class DtdcModule {
  
}
