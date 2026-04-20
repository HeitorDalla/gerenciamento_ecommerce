import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { PrecoVendaService } from './preco-venda.service';

@Controller('preco-venda')
export class PrecoVendaController {
  constructor(private precoVendaService: PrecoVendaService) {}

  @Get()
  async findAll() {
    return this.precoVendaService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.precoVendaService.findById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() body: any) {
    return this.precoVendaService.create(body);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: number, @Body() body: any) {
    return this.precoVendaService.update(id, body);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: number) {
    return this.precoVendaService.delete(id);
  }
}
