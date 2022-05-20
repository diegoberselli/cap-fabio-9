import { Entity, PrimaryColumn, Column } from "typeorm";
import { v4 as uuid } from "uuid";

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
  zipCode: string;

  @Column({
    length: 20,
    nullable: false,
  })
  phone: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
