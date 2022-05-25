import { MigrationInterface, QueryRunner } from "typeorm";

export class updateStoreDelete1653502290640 implements MigrationInterface {
    name = 'updateStoreDelete1653502290640'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "product" ADD "update_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "update_at"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "created_at"`);
    }

}
