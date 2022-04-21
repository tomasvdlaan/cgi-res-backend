import { Base } from 'src/helper/BaseEntity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Reservation } from './Reservation.entity';

@Entity()
export class User extends Base {
  @Column({ type: 'varchar' })
  name: string;  
}
