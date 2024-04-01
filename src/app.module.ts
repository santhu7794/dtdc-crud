import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DtdcModule } from './dtdc/dtdc.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/dtdc'),
    DtdcModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
