import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import request from "supertest";
import app from "../../app";

describe("Testing the cd routes", () => {
  const id = "";
  const cd_id = "";
  const quantity = 20;
  const product_id = ""

  const storageCdData = {
    id,
    cd_id,
    quantity,
    product_id
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
    const response = await request(app).post("/depot_cd").send(storageCdData);
    storageCdData.cd_id = response.body.id;
    storageCdData.product_id = response.body.id;
    storageCdData.id = response.body.id;
    expect(response.status).toBe(201);
    expect(response.body.id).toBeDefined();
    expect(response.body).toEqual(
      expect.objectContaining({
        quantity,
       
      })
    );
  });

  test("Should be able to return a list of all registered storageCd", async () => {
    const response = await request(app).get("/depot_cd");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("map");
  });

  test("Should be able to return storageCd by id", async () => {
    const response = await request(app).get(`/depot_cd/${storageCdData.id}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: storageCdData.id,
        cd_id : storageCdData.cd_id,
        quantity,
        product_id : storageCdData.product_id
      })
    );
  });

  test("Should be able to update an storageCd ", async () => {
    const newQuantity = { cd_quantity: 321 };
    const response = await request(app)
      .patch(`/cd/${storageCdData.id}`)
      .send(newQuantity);
    console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: storageCdData.id,
        cd_id : storageCdData.cd_id,
        cd_quantity: newQuantity.cd_quantity,
        product_id: storageCdData.product_id
      })
    );
  });

  test("Should be able to delete an storageCd", async () => {
    const deleteResponse = await request(app).delete(
      `/cd/${storageCdData.id}`
    );
    expect(deleteResponse.status).toBe(204);
  });
});
