import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreatePeripheralDTO {
  @ApiProperty()
  @IsNotEmpty()
  title: Date;
}
