import { Allow, IsNotEmpty } from 'class-validator';

export class UpdateBuildingDTO {
  @IsNotEmpty()
  id: number;

  @Allow()
  title: string;

  @Allow()
  address: string;
}
