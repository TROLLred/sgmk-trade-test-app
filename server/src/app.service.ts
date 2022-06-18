import { Injectable } from "@nestjs/common";
// Удалить файл
@Injectable()
export class AppService {
    getPeoples() {
        return [
            {
                id: 9,
                name: 'Рамзан',
                surname: 'Кадыров',
                phoneNumber: "+7 322 228 14 88",
                address: "ул. Мира, д. 14",
            },
        ]
    }
}