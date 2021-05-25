import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from './animal.entity';

@Injectable()
export class AnimalsService {
    constructor(@InjectRepository(Animal) private animalsRepository: Repository<Animal>) { }

    async getAnimals(): Promise<Animal[]> {
        return await this.animalsRepository.find();
    }

    async getAnimal(_id: number): Promise<Animal[]> {
        return await this.animalsRepository.find({
            select: ["type", "color", "habitat", "weight"],
            where: [{ "id": _id }]
        });
    }
   
    async createAnimal(animal: Animal) {
      this.animalsRepository.save(animal)
    }

    async updateAnimal(animal: Animal) {
        this.animalsRepository.update(animal.id, animal)
    }

    async deleteAnimal(animal: Animal) {
        this.animalsRepository.delete(animal);
    }
}