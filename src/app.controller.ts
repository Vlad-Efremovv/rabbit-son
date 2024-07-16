import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('create')
  async booking_create(data: any[]) {
    console.log('create ');
  }

  @MessagePattern('update')
  async booking_update(data: any[]) {
    console.log('update ');
  }

  @MessagePattern('delete')
  async booking_delete(data: any[]) {
    console.log('delete');
  }
}
