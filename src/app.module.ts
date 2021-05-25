import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalsModule } from './animals/animals.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AnimalsModule
  ],
})
export class AppModule {}
