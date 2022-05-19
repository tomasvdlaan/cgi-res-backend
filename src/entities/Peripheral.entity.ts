import { Base } from 'src/helper/BaseEntity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Workspace } from './Workspace.entity';

@Entity()
export class Peripheral extends Base {
  @Column({ type: 'varchar', nullable: false })
  title: string;

  @ManyToOne(type => Workspace)
  workspace: Workspace;
}
