import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { DepartamentoService } from './departamento.service';

@Controller('departamento')
export class DepartamentoController {
  constructor(private departamentoService: DepartamentoService) {}

  @Get()
  async findAll() {
    return this.departamentoService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.departamentoService.findById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() body: { descricao: string }) {
    return this.departamentoService.create(body);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: number, @Body() body: { descricao: string }) {
    return this.departamentoService.update(id, body);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: number) {
    return this.departamentoService.delete(id);
  }
}
