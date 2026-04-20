import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UnidadeMedida } from '../../models/unidade-medida.model';

@Injectable()
export class UnidadeMedidaService {
  constructor(
    @InjectModel(UnidadeMedida)
    private unidadeMedidaModel: typeof UnidadeMedida,
  ) {}

  async findAll() {
    return await this.unidadeMedidaModel.findAll();
  }

  async findById(id: number) {
    return await this.unidadeMedidaModel.findByPk(id);
  }

  async create(data: { descricao: string }) {
    return await this.unidadeMedidaModel.create(data as any);
  }

  async update(id: number, data: { descricao: string }) {
    await this.unidadeMedidaModel.update(data, { where: { idUnidadeMedida: id } });
    return await this.findById(id);
  }

  async delete(id: number) {
    return await this.unidadeMedidaModel.destroy({ where: { idUnidadeMedida: id } });
  }
}
