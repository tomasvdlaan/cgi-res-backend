import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReservationService } from './reservation.service';

@ApiTags('Reservations')
@Controller('reservation')
export class ReservationController {
  constructor(private service: ReservationService) {}
  @Get()
  index(): string {
    return 'test';
  }
}
