import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Workspace } from 'src/entities/Workspace.entity';
import { CreateWorkspaceDTO } from './dto/CreateWorkspace.dto';
import { UpdateWorkspaceDTO } from './dto/UpdateWorkspace.dto';
import { WorkspaceService } from './workspace.service';

@ApiTags('Workspaces')
@Controller('workspace')
export class WorkspaceController {
  constructor(private service: WorkspaceService) {}

  @ApiOperation({ summary: 'Retrieve all workspaces' })
  @Get()
  getAll(): Promise<Workspace[]> {
    return this.service.getAll();
  }

  @ApiOperation({ summary: 'Retrieve a workspace by its id' })
  @Get('/:id')
  getById(@Param('id', new ParseIntPipe()) id: number): Promise<Workspace> {
    return this.service.getById(id);
  }

  @ApiOperation({ summary: 'Create a workspace' })
  @Post('/create')
  create(@Body() workspace: CreateWorkspaceDTO): Promise<Workspace> {
    return this.service.create(workspace);
  }

  @ApiOperation({ summary: 'Update a workspace' })
  @Put()
  update(@Body() workspace: UpdateWorkspaceDTO): Promise<Workspace> {
    return this.service.update(workspace);
  }

  @ApiOperation({ summary: 'Delete a workspace by its id' })
  @Delete('/:id')
  delete(@Param('id', new ParseIntPipe()) id: number): Promise<any> {
    return this.service.delete(id);
  }
}
