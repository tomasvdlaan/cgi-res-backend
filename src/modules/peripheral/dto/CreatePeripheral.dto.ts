import { IsNotEmpty } from 'class-validator';

export class CreatePeripheralDTO {
  @IsNotEmpty()
  title: Date;
}
