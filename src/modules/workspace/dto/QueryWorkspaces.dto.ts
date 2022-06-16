import { ApiProperty } from '@nestjs/swagger';
import { Allow } from 'class-validator';

export class QueryWorkspaces {
  @ApiProperty()
  @Allow()
  buildingId?: number;

  @ApiProperty({ default: new Date() })
  @Allow()
  start?: Date;

  @ApiProperty({ default: new Date() })
  @Allow()
  end?: Date;
}
