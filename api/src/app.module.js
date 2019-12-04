import {Module} from '@nestjs/common';
import {CqrsModule} from '@nestjs/cqrs';
import {ServeStaticModule} from '@nestjs/serve-static';

import {resolveClientPlath} from './services';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: resolveClientPlath(),
      renderPath: '/*',
    }),
    CqrsModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
