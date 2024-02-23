import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { UserTypesModule } from './user-types/user-types.module';
import { CountriesModule } from './countries/countries.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { OrderStatusesModule } from './order-statuses/order-statuses.module';
import { OrderDetailsModule } from './order-details/order-details.module';
import { PromotionsModule } from './promotions/promotions.module';
import { EventsModule } from './events/events.module';
import { PaymentTypesModule } from './payment-types/payment-types.module';
import { FeedbackModule } from './feedback/feedback.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    UsersModule,
    UserTypesModule,
    CountriesModule,
    ProductsModule,
    OrdersModule,
    OrderStatusesModule,
    OrderDetailsModule,
    PromotionsModule,
    EventsModule,
    PaymentTypesModule,
    FeedbackModule,
    TransactionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
