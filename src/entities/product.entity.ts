import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("product")
export class Product {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({
    length: 200,
    nullable: false,
  })
  name: string;

  @Column({
    length: 250,
  })
  description: string;

  @Column("float")
  price: number;

  @Column({
    length: 50,
  })
  category: string;

  @Column({
    length: 150,
  })
  img_URL: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
