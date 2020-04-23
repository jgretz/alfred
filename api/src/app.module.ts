/* eslint-disable import/prefer-default-export */
import {Module, CacheModule, CacheInterceptor} from '@nestjs/common';
import {ServeStaticModule} from '@nestjs/serve-static';
import {APP_INTERCEPTOR} from '@nestjs/core';

import {resolveClientPath} from './services';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: resolveClientPath(),
      renderPath: '/*',
    }),
    CacheModule.register(),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
  controllers: [],
})
export class AppModule {}
