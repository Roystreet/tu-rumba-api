import { Sequelize } from 'sequelize-typescript';
import { Countries } from 'src/countries/countries';
import { Events } from 'src/events/events';

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
      sequelize.addModels([Countries, Events]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
