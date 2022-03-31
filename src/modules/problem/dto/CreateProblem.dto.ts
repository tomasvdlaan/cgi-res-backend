import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { ProblemPriority } from 'src/entities/Problem.entity';

export class CreateProblemDTO {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  description: Date;

  @ApiProperty()
  @IsNotEmpty()
  priority: ProblemPriority = ProblemPriority.LOW;
}
