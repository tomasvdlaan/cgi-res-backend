import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Workspace } from 'src/entities/Workspace.entity';
import { Repository } from 'typeorm';
import { CreateWorkspaceDTO } from './dto/CreateWorkspace.dto';
import { UpdateWorkspaceDTO } from './dto/UpdateWorkspace.dto';
import { GetAvailableWorkSpaceDTO } from './dto/GetAvailableWorkSpace.dto';

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
  
  async findAllAvailableWorkspacesTimeDate(workspace: GetAvailableWorkSpaceDTO): Promise<Workspace[]>
  {
      const availableWorkspaces = this.repository.createQueryBuilder("Workspace")
          .where(sq =>{
              const subquery = sq.subQuery()
              .select("Workspace.id")
              .from(Workspace, "Workspace")
              .innerJoin("Workspace.reservations", "reservations")
              .where('(reservations.start >= :start AND reservations.start <= :end',{start: workspace.start,end:workspace.end})
              .orWhere('reservations.end >= :start AND reservations.end <= :end ',{start:workspace.start,end:workspace.end})
              .orWhere('reservations.end <= :start AND reservations.end >= :end)',{start:workspace.start,end:workspace.end})
              // .andWhere(`reservations.date = :date`, {date: workspace.date.toString() + ' 02:00:00'})
              .getQuery();
              return "Workspace.id not IN (" + subquery + ")";
          }).getMany();
      console.log(await availableWorkspaces);
      return availableWorkspaces;
  }

}
