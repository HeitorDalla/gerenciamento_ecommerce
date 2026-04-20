import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { MarcaService } from './marca.service';

@Controller('marca')
export class MarcaController {
  constructor(private marcaService: MarcaService) {}

  @Get()
  async findAll() {
    return this.marcaService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.marcaService.findById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() body: { descricao: string }) {
    return this.marcaService.create(body);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: number, @Body() body: { descricao: string }) {
    return this.marcaService.update(id, body);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: number) {
    return this.marcaService.delete(id);
  }
}
