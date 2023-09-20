import { expect, test, describe, beforeEach } from "bun:test";
import * as orgController from './../../controllers/orgController'

beforeEach(async () => {
    await orgController.deleteAllOrgs()
  });

describe("org Controller", () => {

  let sampleorg = {
    name: 'Capsule Corporation',
  }

  test("It creates a org", async () => {
    let {id, ...org} = await orgController.upsertOrg(sampleorg)
    expect(org).toEqual(sampleorg);
  });

  test("It finds an org by id", async () => {
    let {id} = await orgController.upsertOrg(sampleorg)
    let org = await orgController.getOrgById(id);
    expect(org.name).toEqual(sampleorg.name);
  });

  test("It finds and updates the org when given an id", async () => {
    let org = await orgController.upsertOrg(sampleorg)
    org.name="Red Ribbon"
    org = await orgController.upsertOrg(org)
    expect(org.name).toEqual("Red Ribbon");
  });

  test("It deletes an org", async () => {
    let {id} = await orgController.upsertOrg(sampleorg)
    await orgController.deleteOrg(id)
    let org = await orgController.getOrgById(id);
    expect(org).toEqual(null);
  });
});
