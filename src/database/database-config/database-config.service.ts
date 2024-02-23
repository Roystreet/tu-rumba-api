import { Sequelize } from 'sequelize-typescript';
import { Countries } from 'src/countries/countries';
import { Events } from 'src/events/events';
import { Feedback } from 'src/feedback/feedback';
import { OrderStatuses } from 'src/order-statuses/order-statuses';
import { Orders } from 'src/orders/orders';
import { OrderDetails } from 'src/order-details/order-details';
import { PaymentTypes } from 'src/payment-types/payment-types';
import { Transactions } from 'src/transactions/transactions';
import { Promotions } from 'src/promotions/promotions';
import { Products } from 'src/products/products';
import { UserTypes } from 'src/user-types/user-types';
import { Users } from 'src/users/users';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '123456',
        database: 'Tu_Rumba',
      });
      sequelize.addModels([
        Countries,
        Users,
        Events,
        Feedback,
        OrderStatuses,
        Orders,
        OrderDetails,
        PaymentTypes,
        Transactions,
        Promotions,
        Products,
        UserTypes,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
