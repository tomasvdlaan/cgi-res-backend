import { Allow, IsNotEmpty } from 'class-validator';

export class UpdatePeripheralCategoryDTO {
  @IsNotEmpty()
  id: number;

  @Allow()
  title: Date;
}
