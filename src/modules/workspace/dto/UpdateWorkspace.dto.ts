import { Allow, IsNotEmpty } from 'class-validator';

export class UpdateWorkspaceDTO {
  @IsNotEmpty()
  id: number;

  @Allow()
  title: string;
}
