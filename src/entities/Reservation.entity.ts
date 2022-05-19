import { Base } from 'src/helper/BaseEntity';
import { Column, Entity, Generated, ManyToOne } from 'typeorm';
import { ReservableObject } from './ReservableObject.entity';
import { User } from './User.entity';
import { Workspace } from './Workspace.entity';

@Entity()
export class Reservation extends Base {
  @Column({nullable: false })
  start: Date;

  @Column({nullable: false })
  end: Date;

  @Column({ type: 'varchar', nullable: false})
  @Generated("uuid")
  secret: string;

  @Column({nullable: true, default: null })
  scannedAt: Date;

  @ManyToOne(type => Workspace)
  workspace: Workspace;  

  @Column({ type: 'varchar', nullable: false})
  userId: string;

  @Column({type: 'timestamp',nullable: true })
  isScannedAt: Date;
  
  @ManyToOne(type => ReservableObject)
  ReservableObject: ReservableObject;

  
}
