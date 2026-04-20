import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PrecoVenda } from '../../models/preco-venda.model';
import { Produto } from '../../models/produto.model';
import { PrecoVendaService } from './preco-venda.service';
import { PrecoVendaController } from './preco-venda.controller';

@Module({
  imports: [SequelizeModule.forFeature([PrecoVenda, Produto])],
  providers: [PrecoVendaService],
  controllers: [PrecoVendaController],
})
export class PrecoVendaModule {}
