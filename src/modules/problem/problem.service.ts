import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Problem } from 'src/entities/Problem.entity';
import { Repository } from 'typeorm';
import { CreateProblemDTO } from './dto/CreateProblem.dto';
import { UpdateProblemDTO } from './dto/UpdateProblem.dto';

@Injectable()
export class ProblemService {
  constructor(
    @InjectRepository(Problem)
    private repository: Repository<Problem>,
  ) {}

  getAll(): Promise<Problem[]> {
    return this.repository.createQueryBuilder().getMany();
  }

  getById(id: number): Promise<Problem> {
    return this.repository
      .createQueryBuilder('problem')
      .where('problem.id = :id', { id: id })
      .getOneOrFail();
  }

  create(problem: CreateProblemDTO): Promise<Problem> {
    return this.repository.save(problem as any as Problem);
  }

  update(problem: UpdateProblemDTO): Promise<Problem> {
    return this.repository.save(problem as any as Problem);
  }

  delete(id: number): Promise<any> {
    return this.repository.delete(id);
  }
}
