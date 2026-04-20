import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Marca } from '../../models/marca.model';

@Injectable()
export class MarcaService {
  constructor(
    @InjectModel(Marca)
    private marcaModel: typeof Marca,
  ) {}

  async findAll() {
    return await this.marcaModel.findAll();
  }

  async findById(id: number) {
    return await this.marcaModel.findByPk(id);
  }

  async create(data: { descricao: string }) {
    return await this.marcaModel.create(data as any);
  }

  async update(id: number, data: { descricao: string }) {
    await this.marcaModel.update(data, { where: { idMarca: id } });
    return await this.findById(id);
  }

  async delete(id: number) {
    return await this.marcaModel.destroy({ where: { idMarca: id } });
  }
}
