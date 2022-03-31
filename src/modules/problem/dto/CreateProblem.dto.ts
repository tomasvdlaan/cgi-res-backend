import { IsNotEmpty } from 'class-validator';
import { ProblemPriority } from 'src/entities/Problem.entity';

export class CreateProblemDTO {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: Date;

  @IsNotEmpty()
  priority: ProblemPriority = ProblemPriority.LOW;
}
