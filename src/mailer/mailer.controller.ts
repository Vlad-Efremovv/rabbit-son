import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller('mailer')
export class MailerController {
  @EventPattern('orders_create')
  async handleOrderCreated(data: Record<string, unknown>) {
    console.log('Order create' + data);
  }
}
