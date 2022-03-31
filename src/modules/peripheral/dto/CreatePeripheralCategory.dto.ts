import { IsNotEmpty } from 'class-validator';

export class CreatePeripheralCategoryDTO {
  @IsNotEmpty()
  title: Date;
}
