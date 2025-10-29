import { Module } from '@nestjs/common';
import { ConductoresController } from '../controllers/conductores.controller';
import { DriversGrpcController } from '../controllers/drivers.grpc.controller';
import { ConductoresService } from '../../services/conductores.service';
import { PrismaModule } from '../../../prisma/prisma.module';

@Module({
	imports: [PrismaModule],
	controllers: [ConductoresController, DriversGrpcController],
	providers: [ConductoresService],
	exports: [ConductoresService],
})
export class ConductoresModule {}
