import { buildMessage } from 'class-validator';
import { Base } from 'src/helper/BaseEntity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Building } from './Building.entity';
import { ObjectType } from './OjectType.entity';
import { Peripheral } from './Peripheral.entity';
import { Problem } from './Problem.entity';
import { Reservation } from './Reservation.entity';

@Entity()
export class Workspace extends Base {
  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'boolean', nullable: false, default: true })
  isReservable: boolean = true;

  @ManyToOne(type => Problem)
  problem: Problem;

  @ManyToOne(type => ObjectType)
  objectType: ObjectType;

  @OneToMany(type => Reservation, r => r.workspace)
  reservations: Reservation[];

  @ManyToOne(type => Building)
  building: Building;

  @OneToMany(type => Peripheral, p => p.workspace)
  Peripherals: Peripheral[];

}
