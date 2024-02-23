import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Countries extends Model<Countries> {
  @Column({
    type: DataType.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  id: bigint;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  name: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  active: boolean;
}
