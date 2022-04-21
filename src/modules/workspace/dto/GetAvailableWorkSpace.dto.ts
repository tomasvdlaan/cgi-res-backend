import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty } from 'class-validator';
export class GetAvailableWorkSpaceDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  start:Date;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  end: Date;
  //date:Date
}
