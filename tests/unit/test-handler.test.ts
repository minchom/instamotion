import * as mod from "./../../lambda/handler";

import * as jestPlugin from "serverless-jest-plugin";
const lambdaWrapper = jestPlugin.lambdaWrapper;
const wrapped = lambdaWrapper.wrap(mod, { handler: "queryVehicles" });

describe("λ Function - queryVehicles", () => {
  // beforeAll((done) => {
  //   //lambdaWrapper.init(liveFunction); // Run the deployed lambda

  //   done();
  // });

  it("Invoke / Initiate function test", () => {
    return wrapped.run({}).then((response) => {
      expect(response).not.toBe(null);
      expect(response).toHaveProperty("statusCode");
      expect(response).toHaveProperty("body");
      expect(response.statusCode).toBe(200);
    });
  });
});

