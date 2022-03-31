import { Base } from 'src/helper/BaseEntity';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends Base {
  @Column({ type: 'varchar' })
  name: string;
}
