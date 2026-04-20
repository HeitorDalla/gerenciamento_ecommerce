import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Produto } from './produto.model';

@Table({
  tableName: 'PRD_PRODUTO_SIMILAR',
  timestamps: false,
})
export class ProdutoSimilar extends Model<ProdutoSimilar> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  idProdutoSimilar: number;

  @ForeignKey(() => Produto)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idProduto: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idProdutoSimilar2: number;

  @BelongsTo(() => Produto, 'idProduto')
  produto: Produto;
}
