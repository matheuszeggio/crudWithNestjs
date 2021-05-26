import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animal } from './animals/animal.entity';
import { AnimalsModule } from './animals/animals.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION as any,
      host: process.env.TYPEORM_HOST,
      port: Number(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [Animal],
      migrations: ['build/infra/migrations/*{.ts,.js}'],
      migrationsTableName: 'migrations_typeorm',
      logging: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Animal]),
    AnimalsModule
  ],
})
export class AppModule {}
