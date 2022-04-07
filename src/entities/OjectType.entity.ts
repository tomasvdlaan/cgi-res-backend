import { Base } from 'src/helper/BaseEntity';
import { Column, Entity, OneToMany } from 'typeorm';
import { ReservableObject } from './ReservableObject.entity';
import { Workspace } from './Workspace.entity';

@Entity()
export class ObjectType extends Base {
  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  description: string 

  @OneToMany(type => Workspace, ws => ws.objectType)
  objectTypes: ObjectType[];

  @OneToMany(type => ReservableObject, ws => ws.objectType)
  severvableObjects: ReservableObject[];
}
