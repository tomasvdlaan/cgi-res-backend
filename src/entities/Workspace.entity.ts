import { Base } from 'src/helper/BaseEntity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Workspace extends Base {
  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'boolean', nullable: false, default: true })
  isReservable: boolean = true;
}
