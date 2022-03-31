import { Allow, IsNotEmpty } from 'class-validator';

export class UpdatePeripheralDTO {
  @IsNotEmpty()
  id: number;

  @Allow()
  title: Date;
}
