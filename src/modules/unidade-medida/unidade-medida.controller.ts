import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { UnidadeMedidaService } from './unidade-medida.service';

@Controller('unidade-medida')
export class UnidadeMedidaController {
  constructor(private unidadeMedidaService: UnidadeMedidaService) {}

  @Get()
  async findAll() {
    return this.unidadeMedidaService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.unidadeMedidaService.findById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() body: { descricao: string }) {
    return this.unidadeMedidaService.create(body);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: number, @Body() body: { descricao: string }) {
    return this.unidadeMedidaService.update(id, body);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: number) {
    return this.unidadeMedidaService.delete(id);
  }
}
