import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Produto } from './produto.model';

@Table({
  tableName: 'PRD_PRECO_VENDA',
  timestamps: false,
})
export class PrecoVenda extends Model<PrecoVenda> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  idPrecoVenda: number;

  @ForeignKey(() => Produto)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idProduto: number;

  @Column({
    type: DataType.DECIMAL(12, 2),
    allowNull: false,
  })
  precoVenda: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  dataVigenciaInicial: Date;

  @Column({
    type: DataType.DATE,
  })
  dataValidadeFinal: Date;

  @BelongsTo(() => Produto, 'idProduto')
  produto: Produto;
}
