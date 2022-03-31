import { IsNotEmpty } from 'class-validator';

export class UpdateReservationDTO {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  start: Date;

  @IsNotEmpty()
  end: Date;
}
