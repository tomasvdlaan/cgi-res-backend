import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateReservationDTO {
  @ApiProperty()
  @IsNotEmpty()
  start: Date;

  @ApiProperty()
  @IsNotEmpty()
  end: Date;

  @ApiProperty()
  @IsNotEmpty()
  userId: string;

  @ApiProperty()
  @IsNotEmpty()
  workspace: {id: number};
}
