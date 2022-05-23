import { Entity, PrimaryColumn, Column } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("cd")
export class Cd {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({
    length: 50,
  })
  product_id: string;

  @Column({
    nullable: false,
  })
  cd_quantity: number;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
