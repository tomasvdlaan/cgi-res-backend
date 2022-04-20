import { ApiProperty } from '@nestjs/swagger';
import { Allow, IsNotEmpty } from 'class-validator';

export class UpdatePeripheralDTO {
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @Allow()
  title: Date;

  @ApiProperty()
  @Allow()
  building: { id: number };

  @ApiProperty()
  @Allow()
  category: { id: number };
}
