import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { ProdutoService } from './produto.service';

@Controller('produto')
export class ProdutoController {
  constructor(private produtoService: ProdutoService) {}

  @Get()
  async findAll() {
    return this.produtoService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.produtoService.findById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() body: any) {
    return this.produtoService.create(body);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: number, @Body() body: any) {
    return this.produtoService.update(id, body);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: number) {
    return this.produtoService.delete(id);
  }
}
