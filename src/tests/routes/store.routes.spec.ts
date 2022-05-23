import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import request from "supertest";
import app from "../../app";

describe("Testing the store routes", () => {
  const id = "";
  const branch = "teste";
  const city = "teste";
  const street = "teste";
  const district = "teste";
  const number = "teste";
  const zipcode = "teste";
  const phone = "teste";

  const storeData = {
    id,
    branch,
    city,
    street,
    district,
    number,
    zipcode,
    phone,
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

  test("Should be able to create an store", async () => {
    const response = await request(app).post("/store").send(storeData);
    storeData.id = response.body.id;
    expect(response.status).toBe(201);
    expect(response.body.id).toBeDefined();
    expect(response.body).toEqual(
      expect.objectContaining({
        branch,
        city,
        street,
        district,
        number,
        zipcode,
        phone,
      })
    );
  });

  test("Should be able to return a list of all registered sotres", async () => {
    const response = await request(app).get("/store");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("map");
  });

  test("Should be able to return store by id", async () => {
    const response = await request(app).get(`/store/${storeData.id}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: storeData.id,
        branch,
        city,
        street,
        district,
        number,
        zipcode,
        phone,
      })
    );
  });

  test("Should be able to update an store ", async () => {
    const newbranch = "Another branch";
    const response = await request(app)
      .patch(`/store/${storeData.id}`)
      .send(newbranch);
    console.log(response);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: storeData.id,
        branch: newbranch,
        city,
        street,
        district,
        number,
        zipcode,
        phone,
      })
    );
  });

  test("Should be able to delete an store", async () => {
    const deleteResponse = await request(app).delete(`/store/${storeData.id}`);
    expect(deleteResponse.status).toBe(200);
    expect(deleteResponse.body).toEqual({
      message: "Store deleted with sucess!",
    });
  });
});
