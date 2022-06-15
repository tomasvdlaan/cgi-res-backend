import { ApiProperty } from '@nestjs/swagger';
import { Allow, IsDate, IsOptional } from 'class-validator';

export class GetWorkspaceOptions {
  @ApiProperty()
  @IsDate()
  @IsOptional()
  @Allow()
  date: Date;
}
