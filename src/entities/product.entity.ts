import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('product')
export class Product {

    @PrimaryColumn('uuid')
    readonly id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    category: string;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}