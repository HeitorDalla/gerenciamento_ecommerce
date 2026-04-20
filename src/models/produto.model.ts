import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany, BelongsToMany } from 'sequelize-typescript';
import { Categoria } from './categoria.model';
import { SubCategoria } from './subcategoria.model';
import { Marca } from './marca.model';
import { UnidadeMedida } from './unidade-medida.model';
import { PrecoVenda } from './preco-venda.model';
import { ProdutoSimilar } from './produto-similar.model';

@Table({
  tableName: 'PRD_PRODUTO',
  timestamps: false,
})
export class Produto extends Model<Produto> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  idProduto: number;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  codigo: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  descricao: string;

  @ForeignKey(() => Categoria)
  @Column({
    type: DataType.INTEGER,
  })
  idCategoria: number;

  @ForeignKey(() => SubCategoria)
  @Column({
    type: DataType.INTEGER,
  })
  idSubCategoria: number;

  @ForeignKey(() => Marca)
  @Column({
    type: DataType.INTEGER,
  })
  idMarca: number;

  @ForeignKey(() => UnidadeMedida)
  @Column({
    type: DataType.INTEGER,
  })
  idUnidadeMedida: number;

  @Column({
    type: DataType.STRING(50),
  })
  especificacaoTecnica: string;

  @Column({
    type: DataType.ENUM('A', 'I'),
    defaultValue: 'A',
  })
  status: string;

  @Column({
    type: DataType.DECIMAL(12, 2),
  })
  pesoBruto: number;

  @Column({
    type: DataType.DECIMAL(12, 2),
  })
  pesoLiquido: number;

  @Column({
    type: DataType.STRING(50),
  })
  otdMin: string;

  @Column({
    type: DataType.STRING(50),
  })
  codBarra: string;

  @BelongsTo(() => Categoria, 'idCategoria')
  categoria: Categoria;

  @BelongsTo(() => SubCategoria, 'idSubCategoria')
  subCategoria: SubCategoria;

  @BelongsTo(() => Marca, 'idMarca')
  marca: Marca;

  @BelongsTo(() => UnidadeMedida, 'idUnidadeMedida')
  unidadeMedida: UnidadeMedida;

  @HasMany(() => PrecoVenda, 'idProduto')
  precosVenda: PrecoVenda[];

  @HasMany(() => ProdutoSimilar, 'idProduto')
  produtosSimilares: ProdutoSimilar[];
}
