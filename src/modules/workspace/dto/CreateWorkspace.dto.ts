import { IsNotEmpty } from 'class-validator';

export class CreateWorkspaceDTO {
  @IsNotEmpty()
  title: string;
}
