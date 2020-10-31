import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UseGuards
} from '@nestjs/common'
import { CreateUserDto } from './dtos/create-user.dto'
import { UsersService } from './users.service'
import { ReturnUserDto } from './dtos/return-user.dto'
import { AuthGuard } from '@nestjs/passport'
import { RolesGuard } from 'src/auth/roles.guard'
import { UserRole } from './user-roles.enum'
import { Role } from 'src/auth/role.decorator'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @Role(UserRole.ADMIN)
  @UseGuards(AuthGuard(), RolesGuard)
  async createAdminUser(
    @Body(ValidationPipe) createUserDto: CreateUserDto
  ): Promise<ReturnUserDto> {
    const user = await this.usersService.createAdminUser(createUserDto)
    return {
      user,
      message: 'Administrador cadastrado com sucesso'
    }
  }
}
