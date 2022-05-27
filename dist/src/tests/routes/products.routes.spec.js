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
describe("Testing the products routes", () => {
    const id = "";
    const name = "test_product";
    const price = 123;
    const description = "test_description";
    const category = "test_category";
    const img_URL = "test_img";
    const productData = {
        id,
        name,
        price,
        description,
        category,
        img_URL,
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
    test("Should be able to create an product", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).post("/products").send(productData);
        productData.id = response.body.id;
        expect(response.status).toBe(201);
        expect(response.body.id).toBeDefined();
        expect(response.body).toEqual(expect.objectContaining({
            id: productData.id,
            name,
            price,
            description,
            category,
            img_URL,
        }));
    }));
    test("Should be able to return a list of all registered sotres", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get("/products");
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("map");
    }));
    test("Should be able to return product by id", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get(`/products/${productData.id}`);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.objectContaining({
            id: productData.id,
            name,
            price,
            description,
            category,
            img_URL,
        }));
    }));
    test("Should be able to update an product ", () => __awaiter(void 0, void 0, void 0, function* () {
        const newProductName = { name: "Another product" };
        const response = yield (0, supertest_1.default)(app_1.default)
            .patch(`/products/${productData.id}`)
            .send(newProductName);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.objectContaining({
            id: productData.id,
            name: newProductName.name,
            price,
            description,
            category,
            img_URL,
        }));
    }));
    test("Should be able to delete an product", () => __awaiter(void 0, void 0, void 0, function* () {
        const deleteResponse = yield (0, supertest_1.default)(app_1.default).delete(`/products/${productData.id}`);
        expect(deleteResponse.status).toBe(204);
    }));
});
