import { ApiProperty } from '@nestjs/swagger';
import { Allow, IsNotEmpty } from 'class-validator';

export class UpdateBuildingDTO {
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @Allow()
  title: string;

  @ApiProperty()
  @Allow()
  address: string;
}
