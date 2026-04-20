import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProdutoSimilar } from '../../models/produto-similar.model';
import { Produto } from '../../models/produto.model';

@Injectable()
export class ProdutoSimilarService {
  constructor(
    @InjectModel(ProdutoSimilar)
    private produtoSimilarModel: typeof ProdutoSimilar,
  ) {}

  async findAll() {
    return await this.produtoSimilarModel.findAll({ include: [Produto] });
  }

  async findById(id: number) {
    return await this.produtoSimilarModel.findByPk(id, { include: [Produto] });
  }

  async create(data: { idProduto: number; idProdutoSimilar2: number }) {
    return await this.produtoSimilarModel.create(data as any);
  }

  async update(
    id: number,
    data: { idProduto?: number; idProdutoSimilar2?: number },
  ) {
    await this.produtoSimilarModel.update(data, {
      where: { idProdutoSimilar: id },
    });
    return await this.findById(id);
  }

  async delete(id: number) {
    return await this.produtoSimilarModel.destroy({
      where: { idProdutoSimilar: id },
    });
  }
}
