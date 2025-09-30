import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConductoresModule } from './infrastructure/modules/conductores.module';
import { ConductoresController } from './infrastructure/controllers/conductores.controller';
import { ConductoresService } from './services/conductores.service';

@Module({
  imports: [ConductoresModule],
  controllers: [AppController, ConductoresController],
  providers: [AppService, ConductoresService],
})
export class AppModule {}
