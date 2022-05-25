import { MigrationInterface, QueryRunner } from "typeorm";

export class updateStoreDelete1653495793076 implements MigrationInterface {
    name = 'updateStoreDelete1653495793076'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL, "name" character varying(200) NOT NULL, "description" character varying(250) NOT NULL, "price" double precision NOT NULL, "category" character varying(50) NOT NULL, "img_URL" character varying(150) NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "productOrder" ("id" uuid NOT NULL, "price_product" double precision NOT NULL, "quantity_product_order" integer NOT NULL, "directed_from_id" character varying NOT NULL, "orderId" uuid, "productId" uuid, CONSTRAINT "PK_62d6c74feb56fe9253a9a43eb12" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "store" ("id" uuid NOT NULL, "branch" character varying(50) NOT NULL, "city" character varying(150) NOT NULL, "street" character varying(150) NOT NULL, "district" character varying(150) NOT NULL, "number" character varying(10) NOT NULL, "zipcode" character varying(10) NOT NULL, "phone" character varying(20) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_9280d091bb54abcac29579eb66b" UNIQUE ("branch"), CONSTRAINT "PK_f3172007d4de5ae8e7692759d79" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "storeId" uuid NOT NULL, "amount" double precision NOT NULL, "status" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cd" ("id" uuid NOT NULL, "product_id" character varying(50) NOT NULL, "cd_quantity" integer NOT NULL, CONSTRAINT "PK_5ba1af0050e2165596cebd5ac4e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "storage" ("id" uuid NOT NULL, "storage_quantity" integer NOT NULL, CONSTRAINT "PK_f9b67a9921474d86492aad2e027" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "productOrder" ADD CONSTRAINT "FK_b3ea2fff79c5ae660fe9fa7f30b" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "productOrder" ADD CONSTRAINT "FK_6eef5bbf67ba6262f5ace7f67cc" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_1a79b2f719ecd9f307d62b81093" FOREIGN KEY ("storeId") REFERENCES "store"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_1a79b2f719ecd9f307d62b81093"`);
        await queryRunner.query(`ALTER TABLE "productOrder" DROP CONSTRAINT "FK_6eef5bbf67ba6262f5ace7f67cc"`);
        await queryRunner.query(`ALTER TABLE "productOrder" DROP CONSTRAINT "FK_b3ea2fff79c5ae660fe9fa7f30b"`);
        await queryRunner.query(`DROP TABLE "storage"`);
        await queryRunner.query(`DROP TABLE "cd"`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP TABLE "store"`);
        await queryRunner.query(`DROP TABLE "productOrder"`);
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
