import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { SubCategoriaService } from './subcategoria.service';

@Controller('subcategoria')
export class SubCategoriaController {
  constructor(private subCategoriaService: SubCategoriaService) {}

  @Get()
  async findAll() {
    return this.subCategoriaService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.subCategoriaService.findById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() body: { descricao: string; idCategoria: number },
  ) {
    return this.subCategoriaService.create(body);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: number,
    @Body() body: { descricao?: string; idCategoria?: number },
  ) {
    return this.subCategoriaService.update(id, body);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: number) {
    return this.subCategoriaService.delete(id);
  }
}
