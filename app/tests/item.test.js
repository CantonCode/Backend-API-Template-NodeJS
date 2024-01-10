const mongoose = require("mongoose")
const request = require("supertest")
const app = require("../server")

require("dotenv").config();

describe("GET /items/getAllItems", () => {
    it("should return all items", async () => {
        return request(app)
            .get("/items/getAllItems")
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) =>{
                console.log(res.body);
                expect(res.statusCode).toBe(200)
            })
    })
});