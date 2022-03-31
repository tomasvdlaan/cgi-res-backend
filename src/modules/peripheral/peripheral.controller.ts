import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PeripheralService } from './peripheral.service';

@ApiTags('Peripherals')
@Controller('peripheral')
export class PeripheralController {
  constructor(private service: PeripheralService) {}

  @Get()
  index(): string {
    return 'test';
  }
}
