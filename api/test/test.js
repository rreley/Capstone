let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../build/server");

chai.use(chaiHttp);
chai.should();

describe("API", () => {
  describe("GET /", () => {
    it("should respond to /", (done) => {
      chai
        .request(server)
        .get("/")
        .end((error, response) => {
          response.should.have.status(200);
          done();
        });
    });
  });

  describe("GET /prospects", () => {
    it("should respond to /prospects", (done) => {
      chai
        .request(server)
        .get("/prospects")
        .end((error, response) => {
          response.should.have.status(200);
          done();
        });
    });
  });

  describe("GET /test", () => {
    it("should respond to /test", (done) => {
      chai
        .request(server)
        .get("/test")
        .end((error, response) => {
          response.should.have.status(200);
          done();
        });
    });
  });
});
