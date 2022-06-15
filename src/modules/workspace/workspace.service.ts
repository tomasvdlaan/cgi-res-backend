import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Workspace } from 'src/entities/Workspace.entity';
import { Repository } from 'typeorm';
import { CreateWorkspaceDTO } from './dto/CreateWorkspace.dto';
import { GetWorkspaceOptions } from './dto/GetWorkspace.dto';
import { UpdateWorkspaceDTO } from './dto/UpdateWorkspace.dto';

@Injectable()
export class WorkspaceService {
  constructor(
    @InjectRepository(Workspace)
    private repository: Repository<Workspace>,
  ) {}

  getAll(): Promise<Workspace[]> {
    return this.repository
      .createQueryBuilder('workspace')
      .leftJoinAndSelect('workspace.building', 'building')
      .orderBy('workspace.title')
      .getMany();
  }

  getById(id: number, options: GetWorkspaceOptions): Promise<Workspace> {
    let query = this.repository
      .createQueryBuilder('workspace')
      .leftJoinAndSelect('workspace.building', 'building')
      .where('workspace.id = :id', { id: id });

    if (options.date)
      query.leftJoinAndSelect(
        'workspace.reservations',
        'reservation',
        `reservation.start > '${options.date} 00:00:01' AND reservation.end < '${options.date} 23:59:59'`,
      );

    return query.getOneOrFail();
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
