import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Produto } from '../../models/produto.model';
import { Categoria } from '../../models/categoria.model';
import { SubCategoria } from '../../models/subcategoria.model';
import { Marca } from '../../models/marca.model';
import { UnidadeMedida } from '../../models/unidade-medida.model';
import { PrecoVenda } from '../../models/preco-venda.model';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Produto,
      Categoria,
      SubCategoria,
      Marca,
      UnidadeMedida,
      PrecoVenda,
    ]),
  ],
  providers: [ProdutoService],
  controllers: [ProdutoController],
})
export class ProdutoModule {}
