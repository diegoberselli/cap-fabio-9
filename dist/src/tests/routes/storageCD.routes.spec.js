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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../data-source");
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../app"));
describe("Testing the cd routes", () => {
    const id = "";
    const cd_id = "";
    const quantity = 20;
    const product_id = "";
    const storageCdData = {
        id,
        cd_id,
        quantity,
        product_id
    };
    let connection;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield data_source_1.AppDataSource.initialize()
            .then((res) => (connection = res))
            .catch((err) => {
            console.error("Error during data source intialization");
        });
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield connection.destroy();
    }));
    test("Should be able to create an storageCd", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).post("/depot_cd").send(storageCdData);
        storageCdData.cd_id = response.body.id;
        storageCdData.product_id = response.body.id;
        storageCdData.id = response.body.id;
        expect(response.status).toBe(201);
        expect(response.body.id).toBeDefined();
        expect(response.body).toEqual(expect.objectContaining({
            quantity,
        }));
    }));
    test("Should be able to return a list of all registered storageCd", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get("/depot_cd");
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("map");
    }));
    test("Should be able to return storageCd by id", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get(`/depot_cd/${storageCdData.id}`);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.objectContaining({
            id: storageCdData.id,
            cd_id: storageCdData.cd_id,
            quantity,
            product_id: storageCdData.product_id
        }));
    }));
    test("Should be able to update an storageCd ", () => __awaiter(void 0, void 0, void 0, function* () {
        const newQuantity = { cd_quantity: 321 };
        const response = yield (0, supertest_1.default)(app_1.default)
            .patch(`/cd/${storageCdData.id}`)
            .send(newQuantity);
        console.log(response.body);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.objectContaining({
            id: storageCdData.id,
            cd_id: storageCdData.cd_id,
            cd_quantity: newQuantity.cd_quantity,
            product_id: storageCdData.product_id
        }));
    }));
    test("Should be able to delete an storageCd", () => __awaiter(void 0, void 0, void 0, function* () {
        const deleteResponse = yield (0, supertest_1.default)(app_1.default).delete(`/cd/${storageCdData.id}`);
        expect(deleteResponse.status).toBe(204);
    }));
});
