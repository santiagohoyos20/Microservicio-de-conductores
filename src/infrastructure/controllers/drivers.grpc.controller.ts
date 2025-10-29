import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ConductoresService } from '../../services/conductores.service';

@Controller()
export class DriversGrpcController {
  private readonly logger = new Logger(DriversGrpcController.name);

  constructor(private readonly conductoresService: ConductoresService) {}

  // Mapea el RPC CreateDriver definido en proto/drivers.proto
  @GrpcMethod('DriversService', 'CreateDriver')
  async createDriver(data: any): Promise<any> {
    this.logger.debug({ msg: 'gRPC CreateDriver received', data });

    // Mapear campos del proto al modelo Prisma
    const createData: any = {
      id_usuario: data.uuid,
      email: data.email,
      nombre: data.name,
      apellido: data.lastname,
      telefono: data.phoneNumber,
    };

    console.log('DATA:', data);

    // intentamos convertir rol a número si viene como string
    if (data.rol !== undefined && data.rol !== null) {
      const parsed = parseInt(String(data.rol), 10);
      if (!Number.isNaN(parsed)) createData.id_rol = parsed;
      else {
        // Si no se puede parsear, dejar 0 o no incluir
        createData.id_rol = 0;
      }
    }

    const created = await this.conductoresService.create(createData);

    const response = {
      uuid: created.id_usuario,
      email: created.email,
      name: created.nombre,
      lastname: created.apellido,
      phone_number: created.telefono,
      rol: String(created.id_rol ?? ''),
      message: 'Driver created',
    };

    console.log('gRPC CreateDriver response:', response);
    return response;
  }
}
