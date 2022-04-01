const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("incidents", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });
  afterAll(async () => {
    await connection.destroy();
  });
  it("should be able to create a new incident", async () => {
    const response = await request(app)
      .post("/incidents")
      .set("Authorization", "00452853")
      .send({
        title: "Caso Teste",
        description: "Descrição do caso teste",
        value: 100,
      });
    expect(response.body).toHaveProperty("id");
    console.log(response.body);
  });
});
