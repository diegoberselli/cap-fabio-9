import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1653495455597 implements MigrationInterface {
    name = 'initialMigration1653495455597'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "depotCD" ("id" uuid NOT NULL, "quantity" integer NOT NULL, "cdId" uuid, "productId" uuid, CONSTRAINT "PK_32f32d0cfc120f6905537514ced" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product" ADD "img_URL" character varying(150) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "name" character varying(200) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "description" character varying(250) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "price" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "category"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "category" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "depotCD" ADD CONSTRAINT "FK_7a146029fd6a1d599da861d3f74" FOREIGN KEY ("cdId") REFERENCES "cd"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "depotCD" ADD CONSTRAINT "FK_3a33590b71682dd2b90e80c0bf6" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "depotCD" DROP CONSTRAINT "FK_3a33590b71682dd2b90e80c0bf6"`);
        await queryRunner.query(`ALTER TABLE "depotCD" DROP CONSTRAINT "FK_7a146029fd6a1d599da861d3f74"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "category"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "category" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "img_URL"`);
        await queryRunner.query(`DROP TABLE "depotCD"`);
    }

}
