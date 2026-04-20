import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UnidadeMedida } from '../../models/unidade-medida.model';
import { UnidadeMedidaService } from './unidade-medida.service';
import { UnidadeMedidaController } from './unidade-medida.controller';

@Module({
  imports: [SequelizeModule.forFeature([UnidadeMedida])],
  providers: [UnidadeMedidaService],
  controllers: [UnidadeMedidaController],
})
export class UnidadeMedidaModule {}
