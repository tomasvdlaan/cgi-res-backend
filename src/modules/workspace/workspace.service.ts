import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Workspace } from 'src/entities/Workspace.entity';
import { Repository } from 'typeorm';
import { CreateWorkspaceDTO } from './dto/CreateWorkspace.dto';
import { UpdateWorkspaceDTO } from './dto/UpdateWorkspace.dto';

@Injectable()
export class WorkspaceService {
  constructor(
    @InjectRepository(Workspace)
    private repository: Repository<Workspace>,
  ) {}

  getAll(): Promise<Workspace[]> {
    return this.repository.createQueryBuilder().getMany();
  }

  getById(id: number): Promise<Workspace> {
    return this.repository
      .createQueryBuilder('workspace')
      .where('workspace.id = :id', { id: id })
      .getOneOrFail();
  }

  create(workspace: CreateWorkspaceDTO): Promise<Workspace> {
    return this.repository.save(workspace);
  }

  update(workspace: UpdateWorkspaceDTO): Promise<Workspace> {
    return this.repository.save(workspace);
  }

  delete(id: number): Promise<any> {
    return this.repository.delete(id);
  }
}
