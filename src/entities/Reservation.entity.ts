import { Base } from 'src/helper/BaseEntity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { ReservableObject } from './ReservableObject.entity';
import { User } from './User.entity';
import { Workspace } from './Workspace.entity';

@Entity()
export class Reservation extends Base {
  @Column({ type: 'time', nullable: false })
  start: Date;

  @Column({ type: 'time', nullable: false })
  end: Date;

  @Column({ type: 'varchar', nullable: false })
  secret: string;

  @Column({nullable: true, default: null })
  scannedAt: Date;

  @ManyToOne(type => User)
  user: User;

  @ManyToOne(type => Workspace)
  workspace: Workspace;  
  
  @ManyToOne(type => ReservableObject)
  ReservableObject: ReservableObject;
}
