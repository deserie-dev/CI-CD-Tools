const supertest = require("supertest");
const app = require("../index");

test("GET route", async () => {
    await supertest(app)
        .get("/")
        .expect(200)
        .then(async (res) => {
            expect(res.body).toBe("SCA Cloud School Week 5: CI/CD Tools - Jenkins, CircleCI, TravisCI")
        })
});