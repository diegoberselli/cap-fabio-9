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
describe("Testing the storage routes", () => {
    const id = "";
    const storage_quantity = 123;
    const storageData = {
        id,
        storage_quantity,
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
    test("Should be able to create an storage", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).post("/storage").send(storageData);
        storageData.id = response.body.id;
        expect(response.status).toBe(201);
        expect(response.body.id).toBeDefined();
        expect(response.body).toEqual(expect.objectContaining({
            id: storageData.id,
            storage_quantity,
        }));
    }));
    test("Should be able to return a list of all registered sotres", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get("/storage");
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("map");
    }));
    test("Should be able to return storage by id", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get(`/storage/${storageData.id}`);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.objectContaining({
            id: storageData.id,
            storage_quantity,
        }));
    }));
    test("Should be able to update an storage ", () => __awaiter(void 0, void 0, void 0, function* () {
        const newQuantity = { storage_quantity: 321 };
        const response = yield (0, supertest_1.default)(app_1.default)
            .patch(`/storage/${storageData.id}`)
            .send(newQuantity);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.objectContaining({
            id: storageData.id,
            storage_quantity: newQuantity.storage_quantity,
        }));
    }));
    test("Should be able to delete an storage", () => __awaiter(void 0, void 0, void 0, function* () {
        const deleteResponse = yield (0, supertest_1.default)(app_1.default).delete(`/storage/${storageData.id}`);
        expect(deleteResponse.status).toBe(204);
    }));
});
