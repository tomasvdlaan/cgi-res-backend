import { ApiProperty } from '@nestjs/swagger';
import { Allow, IsNotEmpty } from 'class-validator';

export class UpdateWorkspaceDTO {
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @Allow()
  title: string;
}
