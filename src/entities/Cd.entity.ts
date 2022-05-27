import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import DepotCD from "./depotCD.entity";

@Entity("cd")
export class Cd {
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

  @OneToMany(() => DepotCD, (depotCD) => depotCD.cd,)
  products: DepotCD[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
