import server from "bunrest";
import * as orgController from '../controllers/orgController';
const router = server().router();

router.get('/', async (req, res) => {
    try {
        const orgs = await orgController.getAllOrgs()
        res.json(orgs);
    } catch (err) {
        res.json(err);
    }
});

router.get('/:id', async (req, res) => {
    let id  = Number(req.params.id)
    try {
        const org = await orgController.getOrgById(id)
        res.json(org);
    } catch (err) {
        res.send(err);
    }
});

router.put('/', async (req, res) => {
    const org = req.body;
    try {
          const upsertedorg = await orgController.upsertOrg(org)
          res.json(upsertedorg);
        }
    catch (err) {
        res.send(err);
    }
});

router.delete('/:id', async (req, res) => {
    let id  = Number(req.params.id)
    try {
        await orgController.deleteOrg(id)
        res.status(200);
      }
  catch (err) {
      res.send(err);
  }
 });


export default router;
