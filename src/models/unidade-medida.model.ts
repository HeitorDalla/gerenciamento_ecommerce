import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Produto } from './produto.model';

@Table({
  tableName: 'PRD_UNIDADE_MEDIDA',
  timestamps: false,
})
export class UnidadeMedida extends Model<UnidadeMedida> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  idUnidadeMedida: number;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  descricao: string;

  @HasMany(() => Produto, 'idUnidadeMedida')
  produtos: Produto[];
}
