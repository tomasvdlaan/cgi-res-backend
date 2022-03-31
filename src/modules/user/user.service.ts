import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User.entity';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/CreateUser.dto';
import { UpdateUserDTO } from './dto/UpdateUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  getAll(): Promise<User[]> {
    return this.repository.createQueryBuilder().getMany();
  }

  getById(id: number): Promise<User> {
    return this.repository
      .createQueryBuilder('user')
      .where('user.id = :id', { id: id })
      .getOneOrFail();
  }

  create(user: CreateUserDTO): Promise<User> {
    return this.repository.save(user);
  }

  update(user: UpdateUserDTO): Promise<User> {
    return this.repository.save(user);
  }

  delete(id: number): Promise<any> {
    return this.repository.delete(id);
  }
}
