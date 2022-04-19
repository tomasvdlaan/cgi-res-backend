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
import { Peripheral } from 'src/entities/Peripheral.entity';
import { PeripheralCategory } from 'src/entities/PeripheralCategory.entity';
import { CreatePeripheralDTO } from './dto/CreatePeripheral.dto';
import { CreatePeripheralCategoryDTO } from './dto/CreatePeripheralCategory.dto';
import { UpdatePeripheralDTO } from './dto/UpdatePeripheral.dto';
import { PeripheralService } from './peripheral.service';

@ApiTags('Peripherals')
@Controller('peripheral')
export class PeripheralController {
  constructor(private service: PeripheralService) {}

  @ApiOperation({ summary: 'Retrieve all peripheral categories' })
  @Get('/category')
  getAllCategories(): Promise<PeripheralCategory[]> {
    return this.service.getAllCategories();
  }

  @ApiOperation({ summary: 'Retrieve a peripheral category by its id' })
  @Get('category/:id')
  getByIdCategory(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<PeripheralCategory> {
    return this.service.getCategoryById(id);
  }

  @ApiOperation({ summary: 'Create a peripheral category' })
  @Post('category/create')
  createCategory(
    @Body() peripheral: CreatePeripheralCategoryDTO,
  ): Promise<PeripheralCategory> {
    return this.service.createCategory(peripheral);
  }

  @ApiOperation({ summary: 'Update a peripheral category' })
  @Put('category')
  updateCategory(
    @Body() peripheral: UpdatePeripheralDTO,
  ): Promise<PeripheralCategory> {
    return this.service.updateCategory(peripheral);
  }

  @ApiOperation({ summary: 'Delete a peripheral category by its id' })
  @Delete('category/:id')
  deleteCategory(@Param('id', new ParseIntPipe()) id: number): Promise<any> {
    return this.service.deleteCategory(id);
  }

  @ApiOperation({ summary: 'Retrieve all peripherals' })
  @Get()
  getAll(): Promise<Peripheral[]> {
    return this.service.getAll();
  }

  @ApiOperation({ summary: 'Retrieve a peripheral by its id' })
  @Get('/:id')
  getById(@Param('id', new ParseIntPipe()) id: number): Promise<Peripheral> {
    return this.service.getById(id);
  }

  @ApiOperation({ summary: 'Create a peripheral' })
  @Post('/create')
  create(@Body() peripheral: CreatePeripheralDTO): Promise<Peripheral> {
    return this.service.create(peripheral);
  }

  @ApiOperation({ summary: 'Update a peripheral' })
  @Put()
  update(@Body() peripheral: UpdatePeripheralDTO): Promise<Peripheral> {
    return this.service.update(peripheral);
  }

  @ApiOperation({ summary: 'Delete a peripheral by its id' })
  @Delete('/:id')
  delete(@Param('id', new ParseIntPipe()) id: number): Promise<any> {
    return this.service.delete(id);
  }
}
