import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
  Query,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Reservation } from 'src/entities/Reservation.entity';
import { CreateReservationDTO } from './dto/CreateReservation.dto';
import { GetUserReservations } from './dto/GetUserReservations';
import { UpdateReservationDTO } from './dto/UpdateReservation.dto';
import { ReservationService } from './reservation.service';

@ApiTags('Reservations')
@Controller('reservation')
export class ReservationController {
  constructor(private service: ReservationService) {}

  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Retrieve all reservations' })
  @Get()
  getAll(): Promise<Reservation[]> {
    return this.service.getAll();
  }

  @ApiOperation({ summary: 'Retrieve all reservations' })
  @Get('/user/:userId')
  getReservationsByUser(
    @Param('userId') id: string,
    @Query() query: GetUserReservations,
  ): Promise<Reservation[]> {
    query.userId = id;
    return this.service.getByUserId(query);
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
}
