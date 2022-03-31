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
import { Building } from 'src/entities/Building.entity';
import { BuildingService } from './building.service';
import { CreateBuildingDTO } from './dto/CreateBuilding.dto';
import { UpdateBuildingDTO } from './dto/UpdateBuilding.dto';

@ApiTags('Buildings')
@Controller('building')
export class BuildingController {
  constructor(private service: BuildingService) {}

  @ApiOperation({ summary: 'Retrieve all buildings' })
  @Get()
  getAll(): Promise<Building[]> {
    return this.service.getAll();
  }

  @ApiOperation({ summary: 'Retrieve a building by its id' })
  @Get('/:id')
  getById(@Param('id', new ParseIntPipe()) id: number): Promise<Building> {
    return this.service.getById(id);
  }

  @ApiOperation({ summary: 'Create a building' })
  @Post('/create')
  create(@Body() building: CreateBuildingDTO): Promise<Building> {
    return this.service.create(building);
  }

  @ApiOperation({ summary: 'Update a building' })
  @Put()
  update(@Body() building: UpdateBuildingDTO): Promise<Building> {
    return this.service.update(building);
  }

  @ApiOperation({ summary: 'Delete a building by its id' })
  @Delete('/:id')
  delete(@Param('id', new ParseIntPipe()) id: number): Promise<any> {
    return this.service.delete(id);
  }
}
