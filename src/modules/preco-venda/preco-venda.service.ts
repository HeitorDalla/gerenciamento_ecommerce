import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PrecoVenda } from '../../models/preco-venda.model';
import { Produto } from '../../models/produto.model';

@Injectable()
export class PrecoVendaService {
  constructor(
    @InjectModel(PrecoVenda)
    private precoVendaModel: typeof PrecoVenda,
  ) {}

  async findAll() {
    return await this.precoVendaModel.findAll({ include: [Produto] });
  }

  async findById(id: number) {
    return await this.precoVendaModel.findByPk(id, { include: [Produto] });
  }

  async create(data: any) {
    return await this.precoVendaModel.create(data);
  }

  async update(id: number, data: any) {
    await this.precoVendaModel.update(data, {
      where: { idPrecoVenda: id },
    });
    return await this.findById(id);
  }

  async delete(id: number) {
    return await this.precoVendaModel.destroy({
      where: { idPrecoVenda: id },
    });
  }
}
