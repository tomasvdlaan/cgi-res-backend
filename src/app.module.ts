import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ORMConfigService } from './helper/ORMConfigService';
import { BuildingModule } from './modules/building/building.module';
import { PeripheralModule } from './modules/peripheral/peripheral.module';
import { ProblemModule } from './modules/problem/problem.module';
import { ReservationModule } from './modules/reservation/reservation.module';
import { UserModule } from './modules/user/user.module';
import { WorkspaceModule } from './modules/workspace/workspace.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: ORMConfigService,
      inject: [ORMConfigService],
    }),

    //Custom Modules
    UserModule,
    ReservationModule,
    WorkspaceModule,
    BuildingModule,
    ProblemModule,
    PeripheralModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
