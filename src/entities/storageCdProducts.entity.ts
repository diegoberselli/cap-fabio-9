import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import DepotCD from "./depotCD.entity";

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

  @OneToMany(() => DepotCD, (depotCD) => depotCD.cd,)
  products: DepotCD[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
