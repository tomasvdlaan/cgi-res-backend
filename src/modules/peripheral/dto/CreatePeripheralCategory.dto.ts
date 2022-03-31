import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreatePeripheralCategoryDTO {
  @ApiProperty()
  @IsNotEmpty()
  title: Date;
}
