import { Test, TestingModule } from '@nestjs/testing';
import { PeripheralService } from './peripheral.service';

describe('PeripheralService', () => {
  let service: PeripheralService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeripheralService],
    }).compile();

    service = module.get<PeripheralService>(PeripheralService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
