import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Peripheral } from 'src/entities/Peripheral.entity';
import { PeripheralCategory } from 'src/entities/PeripheralCategory.entity';
import { PeripheralController } from './peripheral.controller';
import { PeripheralService } from './peripheral.service';

@Module({
  imports: [TypeOrmModule.forFeature([Peripheral, PeripheralCategory])],
  controllers: [PeripheralController],
  providers: [PeripheralService],
})
export class PeripheralModule {}
