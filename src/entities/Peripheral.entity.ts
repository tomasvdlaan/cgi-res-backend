import { Base } from 'src/helper/BaseEntity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Building } from './Building.entity';
import { PeripheralCategory } from './PeripheralCategory.entity';

@Entity()
export class Peripheral extends Base {
  @Column({ type: 'varchar', nullable: false })
  title: string;

  @ManyToOne((type) => Building, (building) => building.Peripherals)
  building: Building;

  @ManyToOne((type) => PeripheralCategory, (pc) => pc.Peripherals)
  category: Building;
}
