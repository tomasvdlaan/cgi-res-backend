import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Building } from 'src/entities/Building.entity';
import { BuildingController } from './building.controller';
import { BuildingService } from './building.service';

@Module({
  imports: [TypeOrmModule.forFeature([Building])],
  controllers: [BuildingController],
  providers: [BuildingService],
})
export class BuildingModule {}
