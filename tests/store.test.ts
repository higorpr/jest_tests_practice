import app from "app";
import supertest from "supertest";

const api = supertest(app);

describe("GET /fruits", () => {
	it("should return Status Code 200", async () => {
        const response = await api.get('/fruits')
        expect(response.statusCode).toBe(200)
        
    });
});
// describe("GET /fruits/:id", () => {
// 	it("");
// });
// describe("POST /fruits", () => {});
