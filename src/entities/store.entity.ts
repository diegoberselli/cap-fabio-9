import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("stores")
export class Store {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({
    nullable: false,
    unique: true,
    length: 50,
  })
  filial: string;

  @Column({
    length: 150,
    nullable: false,
  })
  cidade: string;

  @Column({
    length: 150,
    nullable: false,
  })
  rua: string;

  @Column({
    length: 150,
    nullable: false,
  })
  bairro: string;

  @Column({
    length: 10,
    nullable: false,
  })
  numero: string;

  @Column({
    length: 10,
    nullable: false,
  })
  cep: string;

  @Column({
    length: 20,
    nullable: false,
  })
  telefone: string;
}
