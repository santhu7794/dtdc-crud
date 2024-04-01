import { Body, Controller, Param, Post, Put,Delete, Get } from '@nestjs/common';
import { DtdcService } from './dtdc.service';
import { dtdcDto } from './dtos/dtdc.dto';
import { Dtdc } from './schemas/dtdc.schema';



@Controller('dtdc')
export class DtdcController {
    constructor(private readonly dtdcService:DtdcService){}
    @Post()
  async create(@Body() bookDto: dtdcDto): Promise<Dtdc> {
    return this.dtdcService.create(bookDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Dtdc> {
    return this.dtdcService.findOne(id);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() dtdcDto: dtdcDto): Promise<Dtdc> {
    return this.dtdcService.update(id, dtdcDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.dtdcService.remove(id);
  }

}
