import { Base } from 'src/helper/BaseEntity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Reservation extends Base {
  @Column({ type: 'timestamptz', nullable: false })
  start: Date;

  @Column({ type: 'timestamptz', nullable: false })
  end: Date;

  @Column({ type: 'varchar', nullable: false })
  secret: string;

  @Column({ type: 'timestamptz', nullable: true, default: null })
  scannedAt: Date;
}
