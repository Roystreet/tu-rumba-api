import { Module } from '@nestjs/common';
import { databaseProviders } from './database-config/database-config.service';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
