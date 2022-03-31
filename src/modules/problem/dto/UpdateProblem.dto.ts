import { ApiProperty } from '@nestjs/swagger';
import { Allow, IsNotEmpty } from 'class-validator';
import { ProblemPriority } from 'src/entities/Problem.entity';

export class UpdateProblemDTO {
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @Allow()
  title: string;

  @ApiProperty()
  @Allow()
  description: string;

  @ApiProperty()
  @Allow()
  priority: ProblemPriority;
}
