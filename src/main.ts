import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://tngmhaki:f4Xs8OnPrLeN0lf0fl6RC-j2qWPew_BR@kangaroo.rmq.cloudamqp.com/tngmhaki',
      ],
      queue: 'from_1C_to_backend',
      queueOptions: {
        durable: true,
      },
    },
  });

  await app.startAllMicroservices();

  await app.listen(4000, () => console.log('start to localhost:4000'));
}
bootstrap();
