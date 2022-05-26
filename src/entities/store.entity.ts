import {
  Entity,
  PrimaryColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Storage } from "./storageStoreProducts";
import { ProductRegistrationStorage } from "./productRegistrationStorage";

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

  @Column()
  password: string;

  @OneToOne(() => Storage, {
    eager: true,
  })
  @JoinColumn()
  storage: Storage;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
