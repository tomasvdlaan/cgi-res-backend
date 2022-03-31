import { Base } from 'src/helper/BaseEntity';
import { Column, Entity } from 'typeorm';

export enum ProblemPriority {
  'HIGH',
  'MEDIUM',
  'LOW',
}

@Entity()
export class Problem extends Base {
  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;

  @Column({ type: 'timestamp', nullable: true, default: null })
  solvedAt: Date;

  @Column({
    type: 'enum',
    enum: ProblemPriority,
    nullable: false,
    default: ProblemPriority.MEDIUM,
  })
  status: ProblemPriority;
}
