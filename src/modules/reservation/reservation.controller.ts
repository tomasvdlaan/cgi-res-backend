import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Reservation } from 'src/entities/Reservation.entity';
import { CreateReservationDTO } from './dto/CreateReservation.dto';
import { UpdateReservationDTO } from './dto/UpdateReservation.dto';
import { ReservationService } from './reservation.service';

@ApiTags('Reservations')
@Controller('reservation')
export class ReservationController {
  constructor(private service: ReservationService) {}

  @ApiOperation({ summary: 'Retrieve all reservations' })
  @Get()
  getAll(): Promise<Reservation[]> {
    return this.service.getAll();
  }

  @ApiOperation({ summary: 'Retrieve a reservation by its id' })
  @Get('/:id')
  getById(@Param('id', new ParseIntPipe()) id: number): Promise<Reservation> {
    return this.service.getById(id);
  }

  @ApiOperation({ summary: 'Create a reservation' })
  @Post('/create')
  create(@Body() reservation: CreateReservationDTO): Promise<Reservation> {
    return this.service.create(reservation);
  }

  @ApiOperation({ summary: 'Update a reservation' })
  @Put()
  update(@Body() reservation: UpdateReservationDTO): Promise<Reservation> {
    return this.service.update(reservation);
  }

  @ApiOperation({ summary: 'Delete a reservation by its id' })
  @Delete('/:id')
  delete(@Param('id', new ParseIntPipe()) id: number): Promise<any> {
    return this.service.delete(id);
  }

  @ApiOperation({ summary: 'Can scan secret' })
  @Get('scan/:uuid')
  getScanSecret(@Param('uuid',) uuid: string): Promise<Reservation> {
    return this.service.scanSecret(uuid);
  }

}
