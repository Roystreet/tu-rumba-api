import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Users } from 'src/users/users';

@Table
export class UserTypes extends Model<UserTypes> {
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

  @HasMany(() => Users)
  users: Users[];

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  active: boolean;
}
