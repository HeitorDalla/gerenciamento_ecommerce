import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SubCategoria } from '../../models/subcategoria.model';
import { Categoria } from '../../models/categoria.model';

@Injectable()
export class SubCategoriaService {
  constructor(
    @InjectModel(SubCategoria)
    private subCategoriaModel: typeof SubCategoria,
  ) {}

  async findAll() {
    return await this.subCategoriaModel.findAll({ include: [Categoria] });
  }

  async findById(id: number) {
    return await this.subCategoriaModel.findByPk(id, { include: [Categoria] });
  }

  async create(data: { descricao: string; idCategoria: number }) {
    return await this.subCategoriaModel.create(data as any);
  }

  async update(
    id: number,
    data: { descricao?: string; idCategoria?: number },
  ) {
    await this.subCategoriaModel.update(data, {
      where: { idSubCategoria: id },
    });
    return await this.findById(id);
  }

  async delete(id: number) {
    return await this.subCategoriaModel.destroy({
      where: { idSubCategoria: id },
    });
  }
}
