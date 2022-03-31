import { Allow, IsNotEmpty } from 'class-validator';
import { ProblemPriority } from 'src/entities/Problem.entity';

export class UpdateProblemDTO {
  @IsNotEmpty()
  id: number;

  @Allow()
  title: string;

  @Allow()
  description: string;

  @Allow()
  priority: ProblemPriority;
}
