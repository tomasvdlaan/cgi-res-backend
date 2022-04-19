import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Problem } from 'src/entities/Problem.entity';
import { CreateProblemDTO } from './dto/CreateProblem.dto';
import { UpdateProblemDTO } from './dto/UpdateProblem.dto';
import { ProblemService } from './problem.service';

@ApiTags('Problems')
@Controller('problem')
export class ProblemController {
  constructor(private service: ProblemService) {}

  @ApiOperation({ summary: 'Retrieve all problems' })
  @Get()
  getAll(): Promise<Problem[]> {
    return this.service.getAll();
  }

  @ApiOperation({ summary: 'Retrieve a problem by its id' })
  @Get('/:id')
  getById(@Param('id', new ParseIntPipe()) id: number): Promise<Problem> {
    return this.service.getById(id);
  }

  @ApiOperation({ summary: 'Create a problem' })
  @Post('/create')
  create(@Body() problem: CreateProblemDTO): Promise<Problem> {
    return this.service.create(problem);
  }

  @ApiOperation({ summary: 'Update a problem' })
  @Put()
  update(@Body() problem: UpdateProblemDTO): Promise<Problem> {
    return this.service.update(problem);
  }

  @ApiOperation({ summary: 'Delete a problem by its id' })
  @Delete('/:id')
  delete(@Param('id', new ParseIntPipe()) id: number): Promise<any> {
    return this.service.delete(id);
  }
}
