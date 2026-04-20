import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Categoria } from './categoria.model';

@Table({
  tableName: 'PRD_MARCA',
  timestamps: false,
})
export class Marca extends Model<Marca> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  idMarca: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  descricao: string;

  @HasMany(() => Categoria, 'idMarca')
  categorias: Categoria[];
}
