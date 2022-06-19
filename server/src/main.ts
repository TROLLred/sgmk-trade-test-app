import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

/* Точка входа в приложение */
async function start() {
    const PORT = process.env.PORT || 5000; // Берем порт из системных настроек, в противном случае 5000
    const app = await NestFactory.create(AppModule); // Передаем модуль AppModule
    app.enableCors(); /* Когда я думал, что работы осталось на полчаса
    я ощутил резкий подзатыльник в виде CORS*/
    /* Прослушиваем указанный порт */
    await app.listen(PORT, () => {
        console.log(`Server started on port =${PORT}`)
    });
}

start()