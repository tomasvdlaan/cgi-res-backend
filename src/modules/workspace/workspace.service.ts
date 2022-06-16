import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Workspace } from 'src/entities/Workspace.entity';
import { Repository } from 'typeorm';
import { CreateWorkspaceDTO } from './dto/CreateWorkspace.dto';
import { GetWorkspaceOptions } from './dto/GetWorkspace.dto';
import { QueryWorkspaces } from './dto/QueryWorkspaces.dto';
import { UpdateWorkspaceDTO } from './dto/UpdateWorkspace.dto';

@Injectable()
export class WorkspaceService {
  constructor(
    @InjectRepository(Workspace)
    private repository: Repository<Workspace>,
  ) {}

  getAll(query?: QueryWorkspaces): Promise<Workspace[]> {
    let qb = this.repository
      .createQueryBuilder('workspace')
      .leftJoinAndSelect('workspace.building', 'building')
      .orderBy('workspace.title');

    if (query.start && query.end)
      qb.where((sq) => {
        const subquery = sq
          .subQuery()
          .select('Workspace.id')
          .from(Workspace, 'Workspace')
          .innerJoin('Workspace.reservations', 'reservations')
          .where('(reservations.start BETWEEN :start AND :end)', {
            start: query.start,
            end: query.end,
          })
          .andWhere('(reservations.end BETWEEN :start AND :end)', {
            start: query.start,
            end: query.end,
          })
          .getQuery();
        return 'Workspace.id NOT IN (' + subquery + ')';
      }).andWhere('workspace.isReservable = true');

    if (query.buildingId)
      qb.where('workspace.building.id = :buildingId', {
        buildingId: query.buildingId,
      });

    return qb.getMany();
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
