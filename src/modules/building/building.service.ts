import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Building } from 'src/entities/Building.entity';
import { Repository } from 'typeorm';
import { CreateBuildingDTO } from './dto/CreateBuilding.dto';
import { UpdateBuildingDTO } from './dto/UpdateBuilding.dto';

@Injectable()
export class BuildingService {
  constructor(
    @InjectRepository(Building)
    private repository: Repository<Building>,
  ) {}

  getAll(): Promise<Building[]> {
    return this.repository.createQueryBuilder().getMany();
  }

  getById(id: number): Promise<Building> {
    return this.repository
      .createQueryBuilder('building')
      .where('building.id = :id', { id: id })
      .getOneOrFail();
  }

  create(building: CreateBuildingDTO): Promise<Building> {
    return this.repository.save(building);
  }

  update(building: UpdateBuildingDTO): Promise<Building> {
    return this.repository.save(building);
  }

  delete(id: number): Promise<any> {
    return this.repository.delete(id);
  }
}
