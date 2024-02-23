import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Users } from 'src/users/users';
import { Orders } from 'src/orders/orders';

@Table
export class Feedback extends Model<Feedback> {
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

  @ForeignKey(() => Orders)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  orderID: string;

  @BelongsTo(() => Orders)
  order: Orders;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  rating: number;

  @Column({
    type: DataType.TEXT,
  })
  comment: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  dateTime: Date;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  active: boolean;
}
