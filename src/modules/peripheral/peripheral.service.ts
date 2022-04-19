import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Peripheral } from 'src/entities/Peripheral.entity';
import { PeripheralCategory } from 'src/entities/PeripheralCategory.entity';
import { Repository } from 'typeorm';
import { CreatePeripheralDTO } from './dto/CreatePeripheral.dto';
import { CreatePeripheralCategoryDTO } from './dto/CreatePeripheralCategory.dto';
import { UpdatePeripheralDTO } from './dto/UpdatePeripheral.dto';
import { UpdatePeripheralCategoryDTO } from './dto/UpdatePeripheralCategory.dto';

@Injectable()
export class PeripheralService {
  constructor(
    @InjectRepository(Peripheral)
    private repository: Repository<Peripheral>,
    @InjectRepository(PeripheralCategory)
    private categoryRepository: Repository<PeripheralCategory>,
  ) {}

  getAll(): Promise<Peripheral[]> {
    return this.repository
      .createQueryBuilder('peripheral')
      .leftJoinAndSelect('peripheral.building', 'building')
      .leftJoinAndSelect('peripheral.category', 'category')
      .getMany();
  }

  getById(id: number): Promise<Peripheral> {
    return this.repository
      .createQueryBuilder('peripheral')
      .leftJoinAndSelect('peripheral.building', 'building')
      .leftJoinAndSelect('peripheral.category', 'category')
      .where('peripheral.id = :id', { id: id })
      .getOneOrFail();
  }

  create(peripheral: CreatePeripheralDTO): Promise<Peripheral> {
    return this.repository.save(peripheral as any as Peripheral);
  }

  update(peripheral: UpdatePeripheralDTO): Promise<Peripheral> {
    return this.repository.save(peripheral as any as Peripheral);
  }

  delete(id: number): Promise<any> {
    return this.repository.delete(id);
  }

  getAllCategories(): Promise<PeripheralCategory[]> {
    return this.categoryRepository.createQueryBuilder().getMany();
  }

  getCategoryById(id: number): Promise<PeripheralCategory> {
    return this.categoryRepository
      .createQueryBuilder('peripheral')
      .where('peripheral.id = :id', { id: id })
      .getOneOrFail();
  }

  createCategory(
    peripheral: CreatePeripheralCategoryDTO,
  ): Promise<PeripheralCategory> {
    return this.categoryRepository.save(
      peripheral as any as PeripheralCategory,
    );
  }

  updateCategory(
    peripheral: UpdatePeripheralCategoryDTO,
  ): Promise<PeripheralCategory> {
    return this.categoryRepository.save(
      peripheral as any as PeripheralCategory,
    );
  }

  deleteCategory(id: number): Promise<any> {
    return this.categoryRepository.delete(id);
  }
}
