import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ConductoresService } from '../../services/conductores.service';

@Controller('conductores')
export class ConductoresController {
	constructor(private readonly conductoresService: ConductoresService) {}

	@Get()
	async findAll() {
		return this.conductoresService.findAll();
	}

	@Get(':id')
	async findOne(@Param('id') id: string) {
		return this.conductoresService.findOne(id);
	}

	@Post()
	async create(@Body() data: any) {
		return this.conductoresService.create(data);
	}

	@Put(':id')
	async update(@Param('id') id: string, @Body() data: any) {
		return this.conductoresService.update(id, data);
	}

	@Delete(':id')
	async remove(@Param('id') id: string) {
		return this.conductoresService.remove(id);
	}
}
