import { Module } from '@nestjs/common';
import { ConductoresController } from '../controllers/conductores.controller';
import { ConductoresService } from '../../services/conductores.service';
import { PrismaModule } from '../../../prisma/prisma.module';

@Module({
	imports: [PrismaModule],
	controllers: [ConductoresController],
	providers: [ConductoresService],
	exports: [ConductoresService],
})
export class ConductoresModule {}
