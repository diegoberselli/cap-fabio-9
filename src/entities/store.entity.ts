import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Order } from "./order.entity";

@Entity("store")
export class Store {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({
    nullable: false,
    unique: true,
    length: 50,
  })
  branch: string;

  @Column({
    length: 150,
    nullable: false,
  })
  city: string;

  @Column({
    length: 150,
    nullable: false,
  })
  street: string;

  @Column({
    length: 150,
    nullable: false,
  })
  district: string;

  @Column({
    length: 10,
    nullable: false,
  })
  number: string;

  @Column({
    length: 10,
    nullable: false,
  })
  zipcode: string;

  @Column({
    length: 20,
    nullable: false,
  })
  phone: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @OneToMany(() => Order, (order) => order.store)
  orders: Order[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
