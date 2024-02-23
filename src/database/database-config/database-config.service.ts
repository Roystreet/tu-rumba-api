import { Sequelize } from 'sequelize-typescript';
import { Countries } from 'src/countries/countries';

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
      sequelize.addModels([Countries]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
