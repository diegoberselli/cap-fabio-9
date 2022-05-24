import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import request from "supertest";
import app from "../../app";

describe("Testing the product routes", () => {
  const id = "";
  const product_id = "product_id";
  const cd_quantity = 20;

  const storageCdData = {
    id,
    product_id,
    cd_quantity,
  };
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => {
        console.error("Error during data source intialization");
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("Should be able to create an storageCd", async () => {
    const response = await request(app).post("/storage_cd").send(storageCdData);
    storageCdData.id = response.body.id;
    expect(response.status).toBe(201);
    expect(response.body.id).toBeDefined();
    expect(response.body).toEqual(
      expect.objectContaining({
        product_id,
        cd_quantity,
      })
    );
  });

  test("Should be able to return a list of all registered storageCd", async () => {
    const response = await request(app).get("/storage_cd");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("map");
  });

  test("Should be able to return storageCd by id", async () => {
    const response = await request(app).get(`/storage_cd/${storageCdData.id}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: storageCdData.id,
        product_id,
        cd_quantity,
      })
    );
  });

  test("Should be able to update an storageCd ", async () => {
    const newQuantity = { cd_quantity: 321 };
    const response = await request(app)
      .patch(`/storage_cd/${storageCdData.id}`)
      .send(newQuantity);
    console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: storageCdData.id,
        product_id,
        cd_quantity: newQuantity.cd_quantity,
      })
    );
  });

  test("Should be able to delete an storageCd", async () => {
    const deleteResponse = await request(app).delete(
      `/storage_cd/${storageCdData.id}`
    );
    expect(deleteResponse.status).toBe(204);
  });
});
