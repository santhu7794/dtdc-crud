import { Test, TestingModule } from '@nestjs/testing';
import { DtdcService } from './dtdc.service';

describe('DtdcService', () => {
  let service: DtdcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DtdcService],
    }).compile();

    service = module.get<DtdcService>(DtdcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
