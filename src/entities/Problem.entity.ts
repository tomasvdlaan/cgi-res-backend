import { Base } from 'src/helper/BaseEntity';
import { Column, Entity, OneToMany } from 'typeorm';
import { ReservableObject } from './ReservableObject.entity';
import { Workspace } from './Workspace.entity';

export enum ProblemPriority {
  'HIGH',
  'MEDIUM',
  'LOW',
}

@Entity()
export class Problem extends Base {
  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'varchar', nullable: true })
  description: string;

  @Column({ type: 'timestamp', nullable: true, default: null })
  solvedAt: Date;

  @Column({
    type: 'enum',
    enum: ProblemPriority,
    nullable: false,
    default: ProblemPriority.MEDIUM,
  })
  priority: ProblemPriority;

  @OneToMany(type => ReservableObject, ro => ro.problem)
  ReservableObject: ReservableObject[];

  @OneToMany(type => Workspace, ws => ws.problem)
  WorkSpaces: Workspace[];


}