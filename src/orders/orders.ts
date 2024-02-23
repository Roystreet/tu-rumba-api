import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Users } from 'src/users/users';
import { OrderStatuses } from 'src/order-statuses/order-statuses';
import { PaymentTypes } from 'src/payment-types/payment-types';
import { OrderDetails } from 'src/order-details/order-details';

@Table
export class Orders extends Model<Orders> {
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    allowNull: false,
  })
  id: string;

  @ForeignKey(() => Users)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  userID: string;

  @BelongsTo(() => Users)
  user: Users;

  @Column({
    type: DataType.STRING,
  })
  deliveryAddressID: string;

  @ForeignKey(() => OrderStatuses)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  orderStatusID: string;

  @BelongsTo(() => OrderStatuses)
  orderStatus: OrderStatuses;

  @ForeignKey(() => PaymentTypes)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  paymentTypeID: string;

  @BelongsTo(() => PaymentTypes)
  paymentType: PaymentTypes;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  dateTime: Date;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  total: number;

  @HasMany(() => OrderDetails)
  orderDetails: OrderDetails[];

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  active: boolean;
}
