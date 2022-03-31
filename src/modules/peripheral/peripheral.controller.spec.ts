import { Test, TestingModule } from '@nestjs/testing';
import { PeripheralController } from './peripheral.controller';

describe('PeripheralController', () => {
  let controller: PeripheralController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeripheralController],
    }).compile();

    controller = module.get<PeripheralController>(PeripheralController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
