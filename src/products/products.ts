import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Products extends Model<Products> {
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
  name: string;

  @Column({
    type: DataType.TEXT,
  })
  description: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  stockQuantity: number;

  @Column({
    type: DataType.DECIMAL(10, 2),
  })
  volume: number;

  @Column({
    type: DataType.STRING,
  })
  alcoholType: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  active: boolean;
}
