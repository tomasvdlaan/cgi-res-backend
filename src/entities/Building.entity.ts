import { Base } from 'src/helper/BaseEntity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Peripheral } from './Peripheral.entity';
import { ReservableObject } from './ReservableObject.entity';
import { Workspace } from './Workspace.entity';

@Entity()
export class Building extends Base {
  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'varchar', nullable: true })
  address: string;

  @OneToMany((type) => ReservableObject, (ro) => ro.building)
  ReservableObject: ReservableObject[];

  @OneToMany((type) => Workspace, (ws) => ws.building)
  WorkSpaces: Workspace[];

  @OneToMany((type) => Peripheral, (peripheral) => peripheral.building)
  Peripherals: Peripheral[];
}
