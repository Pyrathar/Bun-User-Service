import { expect, test, describe, beforeEach } from "bun:test";
import * as userController from './../../controllers/userController'
import { upsertOrg } from './../../controllers/orgController'

beforeEach(async () => {
    await userController.deleteAllUsers()
  });

describe("User Controller", async() => {

  let organization = {
    name: "Capsule Corp"
  }

  const { id: organizationId } = await upsertOrg(organization)
  
  let sampleUser = {
    name: 'Akira Toriyama',
    email:"akira@nippon.com",
    organizationId
  }

  test("It creates a user", async () => {
    let {id, ...user} = await userController.upsertUser(sampleUser)
    expect(user).toEqual(sampleUser);
  });

  test("It finds an user by id", async () => {
    let {id} = await userController.upsertUser(sampleUser)
    let user = await userController.getUserById(id);
    expect(user.email).toEqual(sampleUser.email);
  });

  test("It finds and updates the user when given an id", async () => {
    let user = await userController.upsertUser(sampleUser)
    user.email="oda@nippon.com"
    user = await userController.upsertUser(user)
    expect(user.email).toEqual("oda@nippon.com");
  });

  test("It deletes an user", async () => {
    let {id} = await userController.upsertUser(sampleUser)
    await userController.deleteUser(id)
    let user = await userController.getUserById(id);
    expect(user).toEqual(null);
  });
});
