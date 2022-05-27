import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import request from "supertest";
import app from "../../app";

describe("Testing the products routes", () => {
  const id = "";
  const name = "test_product";
  const price = 123;
  const description = "test_description";
  const category = "test_category";
  const img_URL = "test_img"

  const productData = {
    id,
    name,
    price,
    description,
    category,
    img_URL,
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

  test("Should be able to create an product", async () => {
    const response = await request(app).post("/products").send(productData);
    productData.id = response.body.id;
    expect(response.status).toBe(201);
    expect(response.body.id).toBeDefined();
    expect(response.body).toEqual(
      expect.objectContaining({
        id: productData.id,
        name,
        price,
        description,
        category,
        img_URL,
      })
    );
  });

  test("Should be able to return a list of all registered sotres", async () => {
    const response = await request(app).get("/products");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("map");
  });

  test("Should be able to return product by id", async () => {
    const response = await request(app).get(`/products/${productData.id}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: productData.id,
        name,
        price,
        description,
        category,
        img_URL,
      })
    );
  });

  test("Should be able to update an product ", async () => {
    const newProductName = { name: "Another product" };
    const response = await request(app)
      .patch(`/products/${productData.id}`)
      .send(newProductName);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: productData.id,
        name: newProductName.name,
        price,
        description,
        category,
        img_URL,
      })
    );
  });

  test("Should be able to delete an product", async () => {
    const deleteResponse = await request(app).delete(
      `/products/${productData.id}`
    );
    expect(deleteResponse.status).toBe(204);
  });
});
