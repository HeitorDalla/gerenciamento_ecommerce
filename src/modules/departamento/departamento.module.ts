import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Departamento } from '../../models/departamento.model';
import { DepartamentoService } from './departamento.service';
import { DepartamentoController } from './departamento.controller';

@Module({
  imports: [SequelizeModule.forFeature([Departamento])],
  providers: [DepartamentoService],
  controllers: [DepartamentoController],
})
export class DepartamentoModule {}
