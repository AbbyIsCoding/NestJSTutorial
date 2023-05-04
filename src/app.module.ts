import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({ // a decotrator
  imports: [ProductsModule],
  controllers: [AppController], // control how you handle incoming requests 
  providers: [AppService], // extra classes which you can inject into controllers or another provider 
})
export class AppModule {}


// embraces modularity - nest.js by nature doesn't look into all of the files 