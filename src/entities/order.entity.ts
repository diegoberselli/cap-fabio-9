import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { ProductOrder } from "./productOrder.entity";
import { Store } from "./store.entity";

@Entity("order")
export class Order {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  storeId: string;

  @OneToMany(() => ProductOrder, (productOrder) => productOrder.order, {
    eager: true,
    onDelete: "CASCADE",
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

  @ManyToOne(() => Store, (store) => store.orders)
  store: Store;
}
