import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Categoria } from './categoria.model';

@Table({
  tableName: 'PRD_DEPARTAMENTO',
  timestamps: false,
})
export class Departamento extends Model<Departamento> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  idDepartamento: number;

  @Column({
    type: DataType.STRING(150),
    allowNull: false,
  })
  descricao: string;

  @HasMany(() => Categoria, 'idDepartamento')
  categorias: Categoria[];
}
