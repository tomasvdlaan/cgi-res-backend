import { ApiProperty } from '@nestjs/swagger';
import { Allow, IsDate, IsNotEmpty } from 'class-validator';

export class CreateReservationDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  @Allow()
  start: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  @Allow()
  end: Date;

  @ApiProperty()
  @IsNotEmpty()
  @Allow()
  userId: string;

  @ApiProperty()
  @IsNotEmpty()
  @Allow()
  workspace: { id: number };
}
