import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dtdc } from './schemas/dtdc.schema';
import { dtdcDto } from './dtos/dtdc.dto';



@Injectable()
export class DtdcService {
    constructor(@InjectModel('Dtdc') private dtdcModel:Model<Dtdc>){}
    
    async create(dtdcDto:dtdcDto):Promise<Dtdc>{
        const createdDtdc=new this.dtdcModel(dtdcDto)
        return createdDtdc.save()
    }
    async findOne(id: string): Promise<Dtdc> {
        return this.dtdcModel.findById(id).exec();
      }
      async update(id: string, dtdcDto: dtdcDto): Promise<Dtdc> {
        return this.dtdcModel.findByIdAndUpdate(id, dtdcDto, { new: true }).exec();
      }
    
      async remove(id: string): Promise<void> {
        await this.dtdcModel.findByIdAndDelete(id).exec();
      }
    }
   

