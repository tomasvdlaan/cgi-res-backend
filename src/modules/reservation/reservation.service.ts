import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as moment from 'moment';
import { Reservation } from 'src/entities/Reservation.entity';
import { Repository } from 'typeorm';
import { CreateReservationDTO } from './dto/CreateReservation.dto';
import { GetReservationOptions } from './dto/GetReservations.dto';
import { GetUserReservations } from './dto/GetUserReservations';
import { UpdateReservationDTO } from './dto/UpdateReservation.dto';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private repository: Repository<Reservation>,
  ) {}

  getAll(options: GetReservationOptions): Promise<Reservation[]> {
    let query = this.repository
      .createQueryBuilder('reservation')
      .leftJoinAndSelect('reservation.workspace', 'workspace')
      .leftJoinAndSelect('workspace.building', 'building')
      .orderBy('reservation.start');

    if (!options.includePast)
      query.where('reservation.start > :now', {
        now: new Date().toISOString(),
      });

    if (options.start)
      query.andWhere('reservation.start > :start', {
        start: moment(options.start).toISOString(),
      });

    if (options.end)
      query.andWhere('reservation.end > :end', {
        end: moment(options.end).toISOString(),
      });

    return query.getMany();
  }

  getById(id: number): Promise<Reservation> {
    return this.repository
      .createQueryBuilder('reservation')
      .leftJoinAndSelect('reservation.workspace', 'workspace')
      .leftJoinAndSelect('workspace.building', 'building')
      .where('reservation.id = :id', { id: id })
      .getOneOrFail();
  }

  getByUserId(query: GetUserReservations): Promise<Reservation[]> {
    const qb = this.repository
      .createQueryBuilder('reservation')
      .where('reservation.userId = :id', { id: query.userId });

    if (query.start)
      qb.andWhere('reservation.end > :start', { start: query.start });
    if (query.end) qb.andWhere('reservation.start > :end', { end: query.end });

    return qb.getMany();
  }

  create(reservation: CreateReservationDTO): Promise<Reservation> {
    console.log(reservation);
    return this.repository.save(reservation);
  }

  update(reservation: UpdateReservationDTO): Promise<Reservation> {
    return this.repository.save(reservation);
  }

  delete(id: number): Promise<any> {
    return this.repository.delete(id);
  }
}
