import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Departamento } from './departamento.model';
import { SubCategoria } from './subcategoria.model';

@Table({
  tableName: 'PRD_CATEGORIA',
  timestamps: false,
})
export class Categoria extends Model<Categoria> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  idCategoria: number;

  @ForeignKey(() => Departamento)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idDepartamento: number;

  @Column({
    type: DataType.STRING(150),
    allowNull: false,
  })
  descricao: string;

  @BelongsTo(() => Departamento, 'idDepartamento')
  departamento: Departamento;

  @HasMany(() => SubCategoria, 'idCategoria')
  subCategorias: SubCategoria[];
}
