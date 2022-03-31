import { ApiProperty } from '@nestjs/swagger';
import { Allow, IsNotEmpty } from 'class-validator';

export class UpdatePeripheralDTO {
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @Allow()
  title: Date;
}
