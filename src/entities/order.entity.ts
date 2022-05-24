import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { ProductOrder } from "./productOrder.entity";

@Entity("order")
export class Order {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  storeId: string;

  @OneToMany(() => ProductOrder, (productOrder) => productOrder.order, {
    eager: true,
  })
  products: ProductOrder[];

  @Column("float")
  amount: number;

  @Column()
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
