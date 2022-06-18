import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreatePeopleDto } from './dto/create-people.dto';
import { PeoplesService } from './peoples.service';
// Здесь мы принимаем запросы и возвращаем ответы, а логика находится в сервисе
// Декоратор контроллера
@Controller('peoples') // Принимает перфикс адреса сервера
export class PeoplesController {
    //Чтобы использовать сервис внутри контроллера делаем "Инъекцию"
    constructor(private peoplesService: PeoplesService) { }
    // Чтобы функция стала эндпоиинтом, нужно пометить её декоратором Get / Post / Put / Delete
    @Post() // Путь до эндпоинта
    create(@Body() peopleDto: CreatePeopleDto) {
        return this.peoplesService.createPeople(peopleDto);
    }

    @Get()
    getAll() {
        return this.peoplesService.getAllPeoples();
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.peoplesService.removePeople(id);
    }
}
