import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('create')
  async booking_create(data: any[]) {
    console.log('create ');
    console.log(data);
  }

  @MessagePattern('update')
  async booking_update(data: any[]) {
    console.log('update ');
    console.log(data);
  }

  @MessagePattern('delete')
  async booking_delete(data: any[]) {
    console.log('delete');
    console.log(data);
  }

  
}
