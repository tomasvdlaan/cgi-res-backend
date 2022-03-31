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
import { User } from 'src/entities/User.entity';
import { CreateUserDTO } from './dto/CreateUser.dto';
import { UpdateUserDTO } from './dto/UpdateUser.dto';
import { UserService } from './user.service';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @ApiOperation({ summary: 'Retrieve all users' })
  @Get()
  getAll(): Promise<User[]> {
    return this.service.getAll();
  }

  @ApiOperation({ summary: 'Retrieve a user by its id' })
  @Get('/:id')
  getById(@Param('id', new ParseIntPipe()) id: number): Promise<User> {
    return this.service.getById(id);
  }

  @ApiOperation({ summary: 'Create a user' })
  @Post('/create')
  create(@Body() user: CreateUserDTO): Promise<User> {
    return this.service.create(user);
  }

  @ApiOperation({ summary: 'Update a user' })
  @Put()
  update(@Body() user: UpdateUserDTO): Promise<User> {
    return this.service.update(user);
  }

  @ApiOperation({ summary: 'Delete a user by its id' })
  @Delete('/:id')
  delete(@Param('id', new ParseIntPipe()) id: number): Promise<any> {
    return this.service.delete(id);
  }
}
