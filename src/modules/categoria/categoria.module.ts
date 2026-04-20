import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Categoria } from '../../models/categoria.model';
import { Departamento } from '../../models/departamento.model';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';

@Module({
  imports: [SequelizeModule.forFeature([Categoria, Departamento])],
  providers: [CategoriaService],
  controllers: [CategoriaController],
})
export class CategoriaModule {}
