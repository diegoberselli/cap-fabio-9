import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1653360623057 implements MigrationInterface {
    name = 'initialMigration1653360623057'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "order" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "amount" double precision NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cd" ("id" uuid NOT NULL, "product_id" character varying(50) NOT NULL, "cd_quantity" integer NOT NULL, CONSTRAINT "PK_5ba1af0050e2165596cebd5ac4e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "storage" ("id" uuid NOT NULL, "storage_quantity" integer NOT NULL, CONSTRAINT "PK_f9b67a9921474d86492aad2e027" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "storage"`);
        await queryRunner.query(`DROP TABLE "cd"`);
        await queryRunner.query(`DROP TABLE "order"`);
    }

}
