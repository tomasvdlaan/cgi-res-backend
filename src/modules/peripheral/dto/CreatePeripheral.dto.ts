import { ApiProperty } from '@nestjs/swagger';
import { Allow, IsNotEmpty } from 'class-validator';

export class CreatePeripheralDTO {
  @ApiProperty()
  @IsNotEmpty()
  title: Date;

  @ApiProperty()
  @Allow()
  building: { id: number };

  @ApiProperty()
  @Allow()
  category: { id: number };
}
