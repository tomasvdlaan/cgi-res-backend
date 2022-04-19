import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDateString, IsOptional } from 'class-validator';

export class GetUserReservations {
  userId: string;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  start?: Date;

  @ApiProperty()
  @IsDateString()
  @IsOptional()
  end?: Date;
}
