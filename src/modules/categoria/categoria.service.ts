import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Categoria } from '../../models/categoria.model';
import { Departamento } from '../../models/departamento.model';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectModel(Categoria)
    private categoriaModel: typeof Categoria,
  ) {}

  async findAll() {
    return await this.categoriaModel.findAll({ include: [Departamento] });
  }

  async findById(id: number) {
    return await this.categoriaModel.findByPk(id, { include: [Departamento] });
  }

  async create(data: { descricao: string; idDepartamento: number }) {
    return await this.categoriaModel.create(data as any);
  }

  async update(
    id: number,
    data: { descricao?: string; idDepartamento?: number },
  ) {
    await this.categoriaModel.update(data, { where: { idCategoria: id } });
    return await this.findById(id);
  }

  async delete(id: number) {
    return await this.categoriaModel.destroy({ where: { idCategoria: id } });
  }
}
