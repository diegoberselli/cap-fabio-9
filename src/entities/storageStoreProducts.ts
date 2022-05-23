import { Entity, PrimaryColumn, Column } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("storage")
export class Storage {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  storage_quantity: number;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
