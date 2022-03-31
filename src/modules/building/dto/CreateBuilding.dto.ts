import { Allow, IsNotEmpty } from 'class-validator';

export class CreateBuildingDTO {
  @IsNotEmpty()
  title: string;

  @Allow()
  address: string;
}
