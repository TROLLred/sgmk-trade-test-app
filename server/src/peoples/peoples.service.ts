import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePeopleDto } from './dto/create-people.dto';
import { People } from './peoples.model';

@Injectable()
export class PeoplesService {
    constructor(
        @InjectModel(People) 
        private peopleRepository: typeof People
    ) {}
    async createPeople(dto: CreatePeopleDto) {
        const people = await this.peopleRepository.create(dto);
        return people;
    }
    async getAllPeoples(): Promise<People[]> {
        const peoples = await this.peopleRepository.findAll();
        return peoples;
    }
    /*findOne(id: string): Promise<People> {
        return this.peopleRepository.findOne({
            where: {
                id,
            }
        })
    }*/
    async removePeople(id: string): Promise<void> {
        const people = await this.peopleRepository.findOne({
            where: {
                id,
            }
        });
        await people.destroy();
    }
}
