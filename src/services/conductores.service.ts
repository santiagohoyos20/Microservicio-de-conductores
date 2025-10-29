import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ConductoresService {
	constructor(private readonly prisma: PrismaService) {}

	async findAll() {
		return this.prisma.conductores.findMany();
	}

	async findOne(id: string) {
		const conductor = await this.prisma.conductores.findUnique({
			where: { id_usuario: id },
		});
		if (!conductor) throw new NotFoundException(`Conductor ${id} no encontrado`);
		return conductor;
	}

	async create(data: any) {
		return this.prisma.conductores.create({ data });
	}

	async update(id: string, data: any) {
		await this.findOne(id);
		return this.prisma.conductores.update({ where: { id_usuario: id }, data });
	}

	async remove(id: string) {
		await this.findOne(id);
		return this.prisma.conductores.delete({ where: { id_usuario: id } });
	}
}
