import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'SenhaSqlDev#',
  database: 'dev',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true
}
