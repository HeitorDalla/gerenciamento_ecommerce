import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Categoria } from './categoria.model';
import { Produto } from './produto.model';

@Table({
  tableName: 'PRD_SUBCATEGORIA',
  timestamps: false,
})
export class SubCategoria extends Model<SubCategoria> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  idSubCategoria: number;

  @ForeignKey(() => Categoria)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idCategoria: number;

  @Column({
    type: DataType.STRING(150),
    allowNull: false,
  })
  descricao: string;

  @BelongsTo(() => Categoria, 'idCategoria')
  categoria: Categoria;

  @HasMany(() => Produto, 'idSubCategoria')
  produtos: Produto[];
}
