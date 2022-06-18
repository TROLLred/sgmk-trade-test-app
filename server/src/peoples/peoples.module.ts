import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PeoplesController } from './peoples.controller';
import { People } from './peoples.model';
import { PeoplesService } from './peoples.service';

@Module({
  controllers: [PeoplesController],
  providers: [PeoplesService],
  imports: [
    SequelizeModule.forFeature([People])
  ]
})
export class PeoplesModule {}
