import { expect, test, describe, beforeEach } from "bun:test";
import * as orgController from './../../controllers/orgController'

beforeEach(async () => {
    await orgController.deleteAllOrgs()
  });

describe("Organization Controller", () => {

  let sampleorg = {
    name: 'Capsule Corporation',
  }

  test("It creates a organization", async () => {
    let {id, ...org} = await orgController.upsertOrg(sampleorg)
    expect(org).toEqual(sampleorg);
  });

  test("It finds an organization by id", async () => {
    let {id} = await orgController.upsertOrg(sampleorg)
    let org = await orgController.getOrgById(id);
    expect(org.name).toEqual(sampleorg.name);
  });

  test("It finds and updates the organization when given an id", async () => {
    let org = await orgController.upsertOrg(sampleorg)
    org.name="Red Ribbon"
    org = await orgController.upsertOrg(org)
    expect(org.name).toEqual("Red Ribbon");
  });

  test("It deletes an organization", async () => {
    let {id} = await orgController.upsertOrg(sampleorg)
    await orgController.deleteOrg(id)
    let org = await orgController.getOrgById(id);
    expect(org).toEqual(null);
  });
});
