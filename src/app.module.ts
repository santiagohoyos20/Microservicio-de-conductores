import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConductoresModule } from './infrastructure/modules/conductores.module';

@Module({
  imports: [ConductoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
