import { Base } from 'src/helper/BaseEntity';
import { Column, Entity, ManyToOne,OneToMany } from 'typeorm';
import { Building } from './Building.entity';
import { ObjectType } from './OjectType.entity';
import { Problem } from './Problem.entity';
import { Reservation } from './Reservation.entity';

@Entity()
export class ReservableObject extends Base {
  @Column({ type: 'varchar', nullable: false })
  name: string;

  @ManyToOne(type => Problem)
  problem: Problem;

  @ManyToOne(type => Building)
  building: Building;

  @ManyToOne(type => ObjectType)
  objectType: ObjectType;

  @OneToMany(type => Reservation, r => r.ReservableObject)
  reservations: Reservation[];
}
