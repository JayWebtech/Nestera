import { Controller, Get, UseInterceptors  } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CacheInterceptor } from '@nestjs/cache-manager';


@ApiTags('Health')
@Controller('health')
export class HealthController {
  @Get()
  @UseInterceptors(CacheInterceptor)
  check() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };
  }
}
