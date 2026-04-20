import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';

import { AppController } from './app.controller';
import { AppService } from './app.service';

// Models
import { User } from './models/user.model';
import { Departamento } from './models/departamento.model';
import { Categoria } from './models/categoria.model';
import { SubCategoria } from './models/subcategoria.model';
import { Marca } from './models/marca.model';
import { UnidadeMedida } from './models/unidade-medida.model';
import { Produto } from './models/produto.model';
import { PrecoVenda } from './models/preco-venda.model';
import { ProdutoSimilar } from './models/produto-similar.model';

// Modules
import { AuthModuleRoutes } from './modules/auth/auth.module';
import { DepartamentoModule } from './modules/departamento/departamento.module';
import { MarcaModule } from './modules/marca/marca.module';
import { UnidadeMedidaModule } from './modules/unidade-medida/unidade-medida.module';
import { CategoriaModule } from './modules/categoria/categoria.module';
import { SubCategoriaModule } from './modules/subcategoria/subcategoria.module';
import { ProdutoModule } from './modules/produto/produto.module';
import { PrecoVendaModule } from './modules/preco-venda/preco-venda.module';
import { ProdutoSimilarModule } from './modules/produto-similar/produto-similar.module';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3306'),
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'projeto_db',
      models: [
        User,
        Departamento,
        Categoria,
        SubCategoria,
        Marca,
        UnidadeMedida,
        Produto,
        PrecoVenda,
        ProdutoSimilar,
      ],
      autoLoadModels: true,
      logging: false,
    }),
    AuthModuleRoutes,
    DepartamentoModule,
    MarcaModule,
    UnidadeMedidaModule,
    CategoriaModule,
    SubCategoriaModule,
    ProdutoModule,
    PrecoVendaModule,
    ProdutoSimilarModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
