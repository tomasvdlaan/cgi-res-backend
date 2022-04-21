import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from 'src/entities/Reservation.entity';
import { Repository } from 'typeorm';
import { CreateReservationDTO } from './dto/CreateReservation.dto';
import { UpdateReservationDTO } from './dto/UpdateReservation.dto';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private repository: Repository<Reservation>,
  ) {}

  getAll(): Promise<Reservation[]> {
    return this.repository.createQueryBuilder().getMany();
  }

  getById(id: number): Promise<Reservation> {
    return this.repository
      .createQueryBuilder('reservation')
      .where('reservation.id = :id', { id: id })
      .getOneOrFail();
  }

  create(reservation: CreateReservationDTO): Promise<Reservation> {
    return this.repository.save(reservation);
  }

  update(reservation: UpdateReservationDTO): Promise<Reservation> {
    return this.repository.save(reservation);
  }

  delete(id: number): Promise<any> {
    return this.repository.delete(id);
  }

  scanSecret(uuid: string): Promise<any>
  {
    const d = new Date();
    return this.repository.createQueryBuilder()
      .update('reservation')
      .set({isScannedAt: d.toISOString()})
      .where('secret = :uuid',{uuid:uuid}).execute();

  }
}
