import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();//habilita solicitudes de afuera
  app.setGlobalPrefix('api');//añade prefijo api a todas las rutas
  await app.listen(3000);
}
bootstrap();
