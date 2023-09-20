import server from "bunrest";
import * as userController from './../controllers/userController';
const router = server().router();

router.get('/', async (req, res) => {
    try {
        const users = await userController.getAllUsers()
        res.json(users);
    } catch (err) {
        res.json(err);
    }
});

router.get('/:id', async (req, res) => {
    let id  = Number(req.params.id)
    try {
        const user = await userController.getUserById(id)
        res.json(user);
    } catch (err) {
        res.send(err);
    }
});

router.post('/bulk', async (req, res) => {
    const userData = req.body;
    const userCreatedList = [];
    try {
        for await (let user of userData) {
            const upsertedUser = await userController.upsertUser(user)
            userCreatedList.push(upsertedUser);
        }
        res.json(userCreatedList);
    } catch (err) {
        res.send(err);
    }
});



router.put('/', async (req, res) => {
    const user = req.body;
    try {
          const upsertedUser = await userController.upsertUser(user)
          res.json(upsertedUser);
        }
    catch (err) {
        res.send(err);
    }
});

router.delete('/:id', async (req, res) => {
    let id  = Number(req.params.id)
    try {
        await userController.deleteUser(id)
        res.status(200);
      }
  catch (err) {
      res.send(err);
  }
 });


export default router;
