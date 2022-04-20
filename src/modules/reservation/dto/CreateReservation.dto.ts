import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty } from 'class-validator';

export class CreateReservationDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  start: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  end: Date;

  @ApiProperty()
  @IsNotEmpty()
  userId: string;

  @ApiProperty()
  @IsNotEmpty()
  workspace: { id: number };
}
