import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from 'src/entities/Reservation.entity';
import { Repository } from 'typeorm';
import { CreateReservationDTO } from './dto/CreateReservation.dto';
import { GetUserReservations } from './dto/GetUserReservations';
import { UpdateReservationDTO } from './dto/UpdateReservation.dto';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private repository: Repository<Reservation>,
  ) {}

  getAll(): Promise<Reservation[]> {
    return this.repository
      .createQueryBuilder('reservation')
      .leftJoinAndSelect('reservation.workspace', 'workspace')
      .getMany();
  }

  getById(id: number): Promise<Reservation> {
    return this.repository
      .createQueryBuilder('reservation')
      .leftJoinAndSelect('reservation.workspace', 'workspace')
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
