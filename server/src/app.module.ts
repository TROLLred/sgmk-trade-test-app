import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { People } from "./peoples/peoples.model";
import { PeoplesModule } from './peoples/peoples.module';

// Добавляем функционал классу с помощью декоратора module
/*controllers: [AppController],
    providers: [AppService],*/ 
@Module({
    controllers: [],
    providers: [], // Переиспользуемые компоненты
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [People],
            autoLoadModels: true,
        }),
        PeoplesModule,
    ],
})
export class AppModule {}