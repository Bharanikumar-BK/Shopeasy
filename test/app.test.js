const request = require('supertest');
const {app, server } = require('../app')

describe('GET /', () => {
   it("Should return 200 status and correct message", async () => {
      const respone = await request(app).get("/");
      expect(respone.status).toBe(200);
      expect(respone.text).toBe("Welcome to ShopEasy, From BK!");
   })
})
afterAll(() => {
    server.close();
})