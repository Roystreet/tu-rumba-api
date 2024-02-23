import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Orders } from 'src/orders/orders';

@Table
export class PaymentTypes extends Model<PaymentTypes> {
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    allowNull: false,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @HasMany(() => Orders)
  orders: Orders[];

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  active: boolean;
}
