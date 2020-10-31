import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { databaseConfig } from './configs/database.config'
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), UsersModule, AuthModule],
  controllers: [],
  providers: []
})
export class AppModule {}
