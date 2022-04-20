import { Base } from 'src/helper/BaseEntity';
import { Column, Entity, Generated, ManyToOne } from 'typeorm';
import { ReservableObject } from './ReservableObject.entity';
import { Workspace } from './Workspace.entity';

@Entity()
export class Reservation extends Base {
  @Column({ type: 'timestamp', nullable: false })
  start: Date;

  @Column({ type: 'timestamp', nullable: false })
  end: Date;

  @Column({ type: 'varchar', nullable: false })
  @Generated('uuid')
  secret: string;

  @Column({ nullable: true, default: null })
  scannedAt: Date;

  @Column({ type: 'varchar', nullable: false })
  userId: string;

  @ManyToOne((type) => Workspace)
  workspace: Workspace;

  @ManyToOne((type) => ReservableObject)
  ReservableObject: ReservableObject;
}
