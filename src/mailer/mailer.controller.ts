import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { OrdersDto } from './DTO/orders.dto';

@Controller('mailer')
export class MailerController {
  @MessagePattern('orders_create')
  async handleOrderCreated(data: OrdersDto) {
    console.log('Order create ' + data.email + data.prise);
  }
}
