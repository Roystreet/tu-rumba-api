import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Events extends Model<Events> {
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
    type: DataType.DATE,
    allowNull: false,
  })
  startDateTime: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  endDateTime: Date;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  active: boolean;
}
