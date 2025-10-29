import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger only in non-production
  if (process.env.NODE_ENV !== 'production') {
    const config = new DocumentBuilder()
      .setTitle('Microservicio Conductores')
      .setDescription('API para gestión de conductores')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/conductores/api', app, document);
  }

  // Conectar microservicio gRPC
  const grpcUrl = process.env.GRPC_URL ?? '0.0.0.0:50052';
  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      package: 'drivers',
      protoPath: join(__dirname, '../../proto/drivers.proto'),
      url: grpcUrl,
    },
  });

  await app.startAllMicroservices();
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
