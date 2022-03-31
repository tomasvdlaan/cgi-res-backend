import { IsNotEmpty } from 'class-validator';

export class CreateReservationDTO {
  @IsNotEmpty()
  start: Date;

  @IsNotEmpty()
  end: Date;
}
