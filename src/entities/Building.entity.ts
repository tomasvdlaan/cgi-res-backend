import { Base } from 'src/helper/BaseEntity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Building extends Base {
  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'varchar', nullable: true })
  address: string;
}
