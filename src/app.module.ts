import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({ // a decotrator
  imports: [ProductsModule, MongooseModule.forRoot('mongodb+srv://AbbyIsOnAtlas:aksjdf3u8@cluster0.e5gaho1.mongodb.net/test'
  )
],
  controllers: [AppController], // control how you handle incoming requests 
  providers: [AppService], // extra classes which you can inject into controllers or another provider 
})
export class AppModule {}


// embraces modularity - nest.js by nature doesn't look into all of the files 