import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Orders } from 'src/orders/orders';
import { Products } from 'src/products/products';

@Table
export class OrderDetails extends Model<OrderDetails> {
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    allowNull: false,
  })
  id: string;

  @ForeignKey(() => Orders)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  orderID: string;

  @BelongsTo(() => Orders)
  order: Orders;

  @ForeignKey(() => Products)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  productID: string;

  @BelongsTo(() => Products)
  product: Products;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity: number;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  unitPrice: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  active: boolean;
}
