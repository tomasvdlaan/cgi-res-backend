import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProblemService } from './problem.service';

@ApiTags('Problems')
@Controller('problem')
export class ProblemController {
  constructor(private service: ProblemService) {}

  @Get()
  index(): string {
    return 'test';
  }
}
