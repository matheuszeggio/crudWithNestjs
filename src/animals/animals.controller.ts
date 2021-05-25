import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { Animal } from './animal.entity';

@Controller('animals')
export class AnimalsController {
  constructor(private service: AnimalsService) { }

  @Get()
  findAll() {
    return this.service.getAnimals();
  }

  @Get(':id')
  get(@Param() params) {
      return this.service.getAnimal(params.id);
  }

  @Post()
  create(@Body() animal: Animal) {
      return this.service.createAnimal(animal);
  }

  @Put(':id')
  update(@Param('id') id, @Body() animal: Animal) {
      return this.service.updateAnimal(animal);
  }

  @Delete(':id')
  deleteAnimal(@Param() params) {
      return this.service.deleteAnimal(params.id);
  }
}
