const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("ong", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });
  //desfazer as alterações feitas no banco de dados
  afterAll(async () => {
    await connection.destroy();
  });
  it("should be able to create a new ong", async () => {
    const response = await request(app).post("/ongs").send({
      name: "ONG Teste",
      email: "apad@gmail.com",
      whatsapp: "11999999999",
      city: "Rio do Sul",
      uf: "SC",
    });
    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
