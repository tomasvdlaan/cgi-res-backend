import { Base } from 'src/helper/BaseEntity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Peripheral } from './Peripheral.entity';

@Entity()
export class PeripheralCategory extends Base {
  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'varchar', nullable: true })
  description: string;

  @Column({ type: 'varchar', nullable: true })
  icon: string;

  @OneToMany((type) => Peripheral, (peripheral) => peripheral.building)
  Peripherals: Peripheral[];
}
