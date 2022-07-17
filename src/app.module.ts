import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'backend-home-database-1',
      username: 'postgres',
      password: 'password',
      database: 'home-database',
      entities: [Product],
      synchronize: true
    }),
    ProductsModule
  ],
})
export class AppModule {}
