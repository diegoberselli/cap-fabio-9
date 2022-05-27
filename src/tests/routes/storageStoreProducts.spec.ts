import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import request from "supertest";
import app from "../../app";

describe("Testing the storage routes", () => {
  const id = "";
  const storage_quantity = 123;

  const storageData = {
    id,
    storage_quantity,
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

  test("Should be able to create an storage", async () => {
    const response = await request(app).post("/storage").send(storageData);
    storageData.id = response.body.id;
    expect(response.status).toBe(201);
    expect(response.body.id).toBeDefined();
    expect(response.body).toEqual(
      expect.objectContaining({
        id:storageData.id,
        storage_quantity,
      })
    );
  });

  test("Should be able to return a list of all registered sotres", async () => {
    const response = await request(app).get("/storage");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("map");
  });

  test("Should be able to return storage by id", async () => {
    const response = await request(app).get(`/storage/${storageData.id}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: storageData.id,
        storage_quantity,
      })
    );
  });

  test("Should be able to update an storage ", async () => {
    const newQuantity = { storage_quantity: 321 };
    const response = await request(app)
      .patch(`/storage/${storageData.id}`)
      .send(newQuantity);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: storageData.id,
        storage_quantity: newQuantity.storage_quantity,
      })
    );
  });

  test("Should be able to delete an storage", async () => {
    const deleteResponse = await request(app).delete(
      `/storage/${storageData.id}`
    );
    expect(deleteResponse.status).toBe(204);
  });
});
