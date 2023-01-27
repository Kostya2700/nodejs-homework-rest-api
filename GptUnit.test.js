// const request = require("supertest");
// const app = require("../../app");
// const { modelUser } = require("../../models");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const { SECRET_KEY } = process.env;

// describe("POST /login", () => {
//   beforeEach(async () => {
//     await modelUser.User.deleteMany({});
//   });

//   test("it should return a 200 status code and a token", async () => {
//     // create a user in the database
//     const password = "password";
//     const hashedPassword = bcrypt.hashSync(password, 8);
//     const user = new modelUser.User({
//       email: "example@gmail.com",
//       password: hashedPassword,
//       subscription: "premium",
//     });
//     await user.save();
//     // make a request to the login endpoint
//     const res = await request(app)
//       .post("/login")
//       .send({ email: "example@gmail.com", password });
//     // check that the status code is 200
//     expect(res.statusCode).toEqual(200);

//     // check that the token is returned in the response body
//     expect(res.body.data.token).toBeTruthy();

//     // check that the user object is returned in the response body
//     const returnedUser = res.body.data.user;
//     expect(returnedUser).toBeTruthy();
//     expect(returnedUser.email).toEqual("example@gmail.com");
//     expect(returnedUser.subscription).toEqual("premium");

//     // check the token is valid
//     const decoded = jwt.verify(res.body.data.token, SECRET_KEY);
//     expect(decoded.id).toEqual(user._id.toString());
//   });
// });
