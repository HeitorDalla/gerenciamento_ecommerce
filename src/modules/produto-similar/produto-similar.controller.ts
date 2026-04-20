import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { ProdutoSimilarService } from './produto-similar.service';

@Controller('produto-similar')
export class ProdutoSimilarController {
  constructor(private produtoSimilarService: ProdutoSimilarService) {}

  @Get()
  async findAll() {
    return this.produtoSimilarService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.produtoSimilarService.findById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() body: { idProduto: number; idProdutoSimilar2: number },
  ) {
    return this.produtoSimilarService.create(body);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: number,
    @Body() body: { idProduto?: number; idProdutoSimilar2?: number },
  ) {
    return this.produtoSimilarService.update(id, body);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: number) {
    return this.produtoSimilarService.delete(id);
  }
}
