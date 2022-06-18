import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
// Здесь мы принимаем запросы и возвращаем ответы, а логика находится в сервисе
// Декоратор контроллера
@Controller('/api') // Принимает перфикс адреса сервера
export class AppController {
    //Чтобы использовать сервис внутри контроллера делаем "Инъекцию"
    constructor(private appService: AppService) { }
    // Чтобы функция стала эндпоиинтом, нужно пометить её декоратором Get / Post / Put / Delete
    @Get('/peoples') // Путь до эндпоинта
    getPeoples() {
        return this.appService.getPeoples()
    }
}
// УДАЛИТЬ ФАЙЛ