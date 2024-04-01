import { Test, TestingModule } from '@nestjs/testing';
import { DtdcController } from './dtdc.controller';

describe('DtdcController', () => {
  let controller: DtdcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DtdcController],
    }).compile();

    controller = module.get<DtdcController>(DtdcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
