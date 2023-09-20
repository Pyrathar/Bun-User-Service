import server from "bunrest";
const router = server().router();

router.get('/', (req, res) => {
    res.send('groups');
});

router.get('/:id', (req, res) => {
    res.send('Details of a specific groups');
});

export default router;
