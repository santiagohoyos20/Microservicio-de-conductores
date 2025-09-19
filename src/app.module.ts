import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConductoresModule } from './conductores/conductores.module';
import { ConductoresController } from './conductores/conductores.controller';
import { ConductoresService } from './conductores/conductores.service';

@Module({
  imports: [ConductoresModule],
  controllers: [AppController, ConductoresController],
  providers: [AppService, ConductoresService],
})
export class AppModule {}
