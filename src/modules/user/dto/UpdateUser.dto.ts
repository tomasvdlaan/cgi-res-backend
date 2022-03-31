import { Allow, IsNotEmpty } from 'class-validator';

export class UpdateUserDTO {
  @IsNotEmpty()
  id: number;

  @Allow()
  name: string;
}
