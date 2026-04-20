import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProdutoSimilar } from '../../models/produto-similar.model';
import { Produto } from '../../models/produto.model';
import { ProdutoSimilarService } from './produto-similar.service';
import { ProdutoSimilarController } from './produto-similar.controller';

@Module({
  imports: [SequelizeModule.forFeature([ProdutoSimilar, Produto])],
  providers: [ProdutoSimilarService],
  controllers: [ProdutoSimilarController],
})
export class ProdutoSimilarModule {}
