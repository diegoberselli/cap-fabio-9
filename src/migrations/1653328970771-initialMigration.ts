import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1653328970771 implements MigrationInterface {
    name = 'initialMigration1653328970771'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "storage" DROP COLUMN "store_id"`);
        await queryRunner.query(`ALTER TABLE "storage" DROP COLUMN "product_id"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "storage" ADD "product_id" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "storage" ADD "store_id" character varying(50) NOT NULL`);
    }

}
