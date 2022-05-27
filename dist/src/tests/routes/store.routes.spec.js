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
describe("Testing the store routes", () => {
    const id = "";
    const branch = "teste";
    const city = "teste";
    const street = "teste";
    const district = "teste";
    const number = "teste";
    const zipcode = "teste";
    const phone = "teste";
    const password = "teste";
    const created_at = 212121;
    const update_at = 21212121;
    const storeData = {
        id,
        branch,
        city,
        street,
        district,
        number,
        zipcode,
        phone,
        password,
        created_at,
        update_at,
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
    test("Should be able to create an store", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).post("/store").send(storeData);
        storeData.id = response.body.id;
        expect(response.status).toBe(201);
        expect(response.body.id).toBeDefined();
        expect(response.body).toEqual(expect.objectContaining({
            id: storeData.id,
            branch,
            city,
            street,
            district,
            number,
            zipcode,
            phone,
            password
        }));
    }));
    test("Should be able to return a list of all registered stores", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get("/store");
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("map");
    }));
    test("Should be able to return store by id", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get(`/store/${storeData.id}`);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.objectContaining({
            id: storeData.id,
            branch,
            city,
            street,
            district,
            number,
            zipcode,
            phone,
            password
        }));
    }));
    test("Should be able to update an store ", () => __awaiter(void 0, void 0, void 0, function* () {
        const newbranch = {
            branch: "another branch",
        };
        const response = yield (0, supertest_1.default)(app_1.default)
            .patch(`/store/${storeData.id}`)
            .send(newbranch);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.objectContaining({
            id: storeData.id,
            branch: newbranch.branch,
            city,
            street,
            district,
            number,
            zipcode,
            phone,
            password
        }));
    }));
    test("Should be able to delete an store", () => __awaiter(void 0, void 0, void 0, function* () {
        const deleteResponse = yield (0, supertest_1.default)(app_1.default).delete(`/store/${storeData.id}`);
        expect(deleteResponse.status).toBe(204);
    }));
});
