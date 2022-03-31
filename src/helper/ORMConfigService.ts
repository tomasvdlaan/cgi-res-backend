import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { join } from 'path';

@Injectable()
export class ORMConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: this.configService.get<any>('ORM_TYPE'),
      host: this.configService.get<string>('ORM_HOST'),
      port: this.configService.get<number>('ORM_PORT'),

      // url: this.configService.get<string>('MONGODB_URL'),

      username: this.configService.get<string>('ORM_USERNAME'),
      password: this.configService.get<string>('ORM_PASSWORD'),
      database: this.configService.get<string>('ORM_DATABASE'),

      entities: [join(__dirname, '../entities/*.entity.{ts,js}')],

      synchronize: true,
    };
  }
}
