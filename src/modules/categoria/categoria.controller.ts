import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { CategoriaService } from './categoria.service';

@Controller('categoria')
export class CategoriaController {
  constructor(private categoriaService: CategoriaService) {}

  @Get()
  async findAll() {
    return this.categoriaService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.categoriaService.findById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() body: { descricao: string; idDepartamento: number },
  ) {
    return this.categoriaService.create(body);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: number,
    @Body() body: { descricao?: string; idDepartamento?: number },
  ) {
    return this.categoriaService.update(id, body);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: number) {
    return this.categoriaService.delete(id);
  }
}
