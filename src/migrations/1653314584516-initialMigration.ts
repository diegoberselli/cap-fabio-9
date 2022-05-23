import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1653314584516 implements MigrationInterface {
    name = 'initialMigration1653314584516'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "store" ("id" uuid NOT NULL, "branch" character varying(50) NOT NULL, "city" character varying(150) NOT NULL, "street" character varying(150) NOT NULL, "district" character varying(150) NOT NULL, "number" character varying(10) NOT NULL, "zipcode" character varying(10) NOT NULL, "phone" character varying(20) NOT NULL, CONSTRAINT "UQ_9280d091bb54abcac29579eb66b" UNIQUE ("branch"), CONSTRAINT "PK_f3172007d4de5ae8e7692759d79" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "store"`);
    }

}
