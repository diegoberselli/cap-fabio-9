import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Entity,
  UpdateDateColumn,
  CreateDateColumn,
  JoinColumn,
} from "typeorm";
import { Storage } from "./storageStoreProducts.entity";
import { Product } from "./product.entity";

@Entity("product_registration_storage")
export class ProductRegistrationStorage {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  quantity: number;

  @Column("float")
  price: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Product, {
    eager: true,
  })
  product: Product;

  @ManyToOne(() => Storage)
  @JoinColumn()
  storage: Storage;
}
