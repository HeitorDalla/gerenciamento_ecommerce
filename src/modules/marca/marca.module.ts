import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Marca } from '../../models/marca.model';
import { MarcaService } from './marca.service';
import { MarcaController } from './marca.controller';

@Module({
  imports: [SequelizeModule.forFeature([Marca])],
  providers: [MarcaService],
  controllers: [MarcaController],
})
export class MarcaModule {}
