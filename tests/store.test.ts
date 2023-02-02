import app from "app";
import supertest from "supertest";

const api = supertest(app);

describe("GET /health", () => {
	it(`Should return "I'm alive!" message`, async () => {
		const response = await api.get("/health");
		// console.log(response)
		expect(response.text).toBe("I'm alive!");
	});
});

describe("GET /fruits", () => {
	it("should return Status Code 200 and an array of fruits", async () => {
		const response = await api.get("/fruits");

		expect(response.statusCode).toBe(200);
		expect(response.body.length).toBeGreaterThanOrEqual(0);
	});
});
describe("GET /fruits/:id", () => {
	it("should return Status Code 200 and the entry with the sent id", async () => {
		const response = await api.get("/fruits/1");

		expect(response.statusCode).toBe(200);
		expect(response.body).toEqual(
			expect.objectContaining({
				id: expect.any(Number),
				name: expect.any(String),
				price: expect.any(Number),
			})
		);
	});
});
describe("POST /fruits", () => {
	it("should return Status Code 201(Created)", async () => {
		const body = { name: "kiwi", price: 10.99 };
		const response = await api.post("/fruits").send(body);

		expect(response.statusCode).toBe(201);
	});
	it("should return Status Code 409(Conflict)", async () => {
		const body = { name: "banana", price: 7.3 };
		const response = await api.post("/fruits").send(body);

		expect(response.statusCode).toBe(409);
	});
});
