import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsOptional } from 'class-validator';

export class GetReservationOptions {
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  includePast: boolean = false;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  start?: Date;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  end?: Date;
}
