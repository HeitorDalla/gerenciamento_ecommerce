import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Produto } from '../../models/produto.model';
import { Categoria } from '../../models/categoria.model';
import { SubCategoria } from '../../models/subcategoria.model';
import { Marca } from '../../models/marca.model';
import { UnidadeMedida } from '../../models/unidade-medida.model';
import { PrecoVenda } from '../../models/preco-venda.model';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectModel(Produto)
    private produtoModel: typeof Produto,
  ) {}

  async findAll() {
    return await this.produtoModel.findAll({
      include: [
        Categoria,
        SubCategoria,
        Marca,
        UnidadeMedida,
        PrecoVenda,
      ],
    });
  }

  async findById(id: number) {
    return await this.produtoModel.findByPk(id, {
      include: [
        Categoria,
        SubCategoria,
        Marca,
        UnidadeMedida,
        PrecoVenda,
      ],
    });
  }

  async create(data: any) {
    return await this.produtoModel.create(data);
  }

  async update(id: number, data: any) {
    await this.produtoModel.update(data, { where: { idProduto: id } });
    return await this.findById(id);
  }

  async delete(id: number) {
    return await this.produtoModel.destroy({ where: { idProduto: id } });
  }
}
