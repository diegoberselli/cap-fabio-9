import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Order } from "./order.entity";
import { Product } from "./product.entity";

@Entity("productOrder")
export class ProductOrder {
  @PrimaryColumn("uuid")
  readonly id: string;

  @ManyToOne(() => Order)
  order: Order;

  @ManyToOne(() => Product, { eager: true })
  product: Product;

  @Column("float")
  price_product: number;

  @Column()
  quantity_product_order: number;

  @Column()
  directed_from_id: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
