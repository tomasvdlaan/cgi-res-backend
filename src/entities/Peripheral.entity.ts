import { Base } from 'src/helper/BaseEntity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Peripheral extends Base {
  @Column({ type: 'varchar', nullable: false })
  title: string;
}
