import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersController } from './users.controller'
import { UserRepository } from './users.repository'
import { UsersService } from './users.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    PassportModule.register({ defaultStrategy: 'jwt' })
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
