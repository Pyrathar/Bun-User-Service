import { expect, test, describe, beforeEach } from "bun:test";
import * as orgRoutes from './../../routes/organizations'

beforeEach(async () => {
   
  });

describe("User Controller", async() => {
  let req = {
    body: {
        "name": "hello"
    }
  }
  test("It deletes an user", async () => {
    console.log(orgRoutes)
    expect(orgRoutes).toEqual(null);
  });
});