import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Departamento } from '../../models/departamento.model';

@Injectable()
export class DepartamentoService {
  constructor(
    @InjectModel(Departamento)
    private departamentoModel: typeof Departamento,
  ) {}

  async findAll() {
    return await this.departamentoModel.findAll();
  }

  async findById(id: number) {
    return await this.departamentoModel.findByPk(id);
  }

  async create(data: { descricao: string }) {
    return await this.departamentoModel.create(data as any);
  }

  async update(id: number, data: { descricao: string }) {
    await this.departamentoModel.update(data, { where: { idDepartamento: id } });
    return await this.findById(id);
  }

  async delete(id: number) {
    return await this.departamentoModel.destroy({ where: { idDepartamento: id } });
  }
}
