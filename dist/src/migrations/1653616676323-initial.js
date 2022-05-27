"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initial1653616676323 = void 0;
class initial1653616676323 {
    constructor() {
        this.name = 'initial1653616676323';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "productOrder" DROP CONSTRAINT "FK_b3ea2fff79c5ae660fe9fa7f30b"`);
            yield queryRunner.query(`ALTER TABLE "productOrder" DROP CONSTRAINT "FK_6eef5bbf67ba6262f5ace7f67cc"`);
            yield queryRunner.query(`CREATE TABLE "depotCD" ("id" uuid NOT NULL, "quantity" integer NOT NULL, "cdId" uuid, "productId" uuid, CONSTRAINT "PK_32f32d0cfc120f6905537514ced" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "product_registration_storage" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" integer NOT NULL, "price" double precision NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "productId" uuid, "storageId" uuid, CONSTRAINT "PK_384382a591764232ff94cc56ee2" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "cd" DROP COLUMN "product_id"`);
            yield queryRunner.query(`ALTER TABLE "cd" DROP COLUMN "cd_quantity"`);
            yield queryRunner.query(`ALTER TABLE "storage" DROP COLUMN "storage_quantity"`);
            yield queryRunner.query(`ALTER TABLE "product" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
            yield queryRunner.query(`ALTER TABLE "product" ADD "update_at" TIMESTAMP NOT NULL DEFAULT now()`);
            yield queryRunner.query(`ALTER TABLE "cd" ADD "branch" character varying(50) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "cd" ADD CONSTRAINT "UQ_5e7cbe61e899292ebb74940f9db" UNIQUE ("branch")`);
            yield queryRunner.query(`ALTER TABLE "cd" ADD "city" character varying(150) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "cd" ADD "street" character varying(150) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "cd" ADD "district" character varying(150) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "cd" ADD "number" character varying(10) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "cd" ADD "zipcode" character varying(10) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "cd" ADD "phone" character varying(20) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "store" ADD "state" character varying(20) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "store" ADD "password" character varying NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "store" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
            yield queryRunner.query(`ALTER TABLE "store" ADD "update_at" TIMESTAMP NOT NULL DEFAULT now()`);
            yield queryRunner.query(`ALTER TABLE "store" ADD "storageId" uuid`);
            yield queryRunner.query(`ALTER TABLE "store" ADD CONSTRAINT "UQ_4f641fd80436201b16e9594c082" UNIQUE ("storageId")`);
            yield queryRunner.query(`ALTER TABLE "order" DROP COLUMN "storeId"`);
            yield queryRunner.query(`ALTER TABLE "order" ADD "storeId" uuid NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "depotCD" ADD CONSTRAINT "FK_7a146029fd6a1d599da861d3f74" FOREIGN KEY ("cdId") REFERENCES "cd"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "depotCD" ADD CONSTRAINT "FK_3a33590b71682dd2b90e80c0bf6" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "productOrder" ADD CONSTRAINT "FK_b3ea2fff79c5ae660fe9fa7f30b" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
            yield queryRunner.query(`ALTER TABLE "productOrder" ADD CONSTRAINT "FK_6eef5bbf67ba6262f5ace7f67cc" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
            yield queryRunner.query(`ALTER TABLE "product_registration_storage" ADD CONSTRAINT "FK_54d3a759f81ceeeb1b839ae9677" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "product_registration_storage" ADD CONSTRAINT "FK_3d8436e4b7a5fe695c92ca83f5e" FOREIGN KEY ("storageId") REFERENCES "storage"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "store" ADD CONSTRAINT "FK_4f641fd80436201b16e9594c082" FOREIGN KEY ("storageId") REFERENCES "storage"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_1a79b2f719ecd9f307d62b81093" FOREIGN KEY ("storeId") REFERENCES "store"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_1a79b2f719ecd9f307d62b81093"`);
            yield queryRunner.query(`ALTER TABLE "store" DROP CONSTRAINT "FK_4f641fd80436201b16e9594c082"`);
            yield queryRunner.query(`ALTER TABLE "product_registration_storage" DROP CONSTRAINT "FK_3d8436e4b7a5fe695c92ca83f5e"`);
            yield queryRunner.query(`ALTER TABLE "product_registration_storage" DROP CONSTRAINT "FK_54d3a759f81ceeeb1b839ae9677"`);
            yield queryRunner.query(`ALTER TABLE "productOrder" DROP CONSTRAINT "FK_6eef5bbf67ba6262f5ace7f67cc"`);
            yield queryRunner.query(`ALTER TABLE "productOrder" DROP CONSTRAINT "FK_b3ea2fff79c5ae660fe9fa7f30b"`);
            yield queryRunner.query(`ALTER TABLE "depotCD" DROP CONSTRAINT "FK_3a33590b71682dd2b90e80c0bf6"`);
            yield queryRunner.query(`ALTER TABLE "depotCD" DROP CONSTRAINT "FK_7a146029fd6a1d599da861d3f74"`);
            yield queryRunner.query(`ALTER TABLE "order" DROP COLUMN "storeId"`);
            yield queryRunner.query(`ALTER TABLE "order" ADD "storeId" character varying NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "store" DROP CONSTRAINT "UQ_4f641fd80436201b16e9594c082"`);
            yield queryRunner.query(`ALTER TABLE "store" DROP COLUMN "storageId"`);
            yield queryRunner.query(`ALTER TABLE "store" DROP COLUMN "update_at"`);
            yield queryRunner.query(`ALTER TABLE "store" DROP COLUMN "created_at"`);
            yield queryRunner.query(`ALTER TABLE "store" DROP COLUMN "password"`);
            yield queryRunner.query(`ALTER TABLE "store" DROP COLUMN "state"`);
            yield queryRunner.query(`ALTER TABLE "cd" DROP COLUMN "phone"`);
            yield queryRunner.query(`ALTER TABLE "cd" DROP COLUMN "zipcode"`);
            yield queryRunner.query(`ALTER TABLE "cd" DROP COLUMN "number"`);
            yield queryRunner.query(`ALTER TABLE "cd" DROP COLUMN "district"`);
            yield queryRunner.query(`ALTER TABLE "cd" DROP COLUMN "street"`);
            yield queryRunner.query(`ALTER TABLE "cd" DROP COLUMN "city"`);
            yield queryRunner.query(`ALTER TABLE "cd" DROP CONSTRAINT "UQ_5e7cbe61e899292ebb74940f9db"`);
            yield queryRunner.query(`ALTER TABLE "cd" DROP COLUMN "branch"`);
            yield queryRunner.query(`ALTER TABLE "product" DROP COLUMN "update_at"`);
            yield queryRunner.query(`ALTER TABLE "product" DROP COLUMN "created_at"`);
            yield queryRunner.query(`ALTER TABLE "storage" ADD "storage_quantity" integer NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "cd" ADD "cd_quantity" integer NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "cd" ADD "product_id" character varying(50) NOT NULL`);
            yield queryRunner.query(`DROP TABLE "product_registration_storage"`);
            yield queryRunner.query(`DROP TABLE "depotCD"`);
            yield queryRunner.query(`ALTER TABLE "productOrder" ADD CONSTRAINT "FK_6eef5bbf67ba6262f5ace7f67cc" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "productOrder" ADD CONSTRAINT "FK_b3ea2fff79c5ae660fe9fa7f30b" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
}
exports.initial1653616676323 = initial1653616676323;
