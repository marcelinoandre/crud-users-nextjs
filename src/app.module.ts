import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { databaseConfig } from './configs/database.config'
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), UsersModule],
  controllers: [],
  providers: []
})
export class AppModule {}
