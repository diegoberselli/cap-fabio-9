import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Product } from "./product.entity";
import { Cd } from "./Cd.entity";
import { v4 as uuid} from 'uuid';


@Entity('depotCD')
export default class DepotCD {

    @PrimaryColumn('uuid')
    readonly id: string;

    @ManyToOne(() => Cd, {eager: true})
    cd: Cd;

    @ManyToOne(() => Product, { eager: true })
    product: Product;

    @Column()
    quantity: number;

    constructor() {
        if (!this.id) {
          this.id = uuid();
        }
      }


}