import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SubCategoria } from '../../models/subcategoria.model';
import { Categoria } from '../../models/categoria.model';
import { SubCategoriaService } from './subcategoria.service';
import { SubCategoriaController } from './subcategoria.controller';

@Module({
  imports: [SequelizeModule.forFeature([SubCategoria, Categoria])],
  providers: [SubCategoriaService],
  controllers: [SubCategoriaController],
})
export class SubCategoriaModule {}
