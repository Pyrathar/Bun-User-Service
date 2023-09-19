import server from "bunrest";
const router = server().router();

router.get('/', (req, res) => {
    res.send('user');
});

router.get('/:id', (req, res) => {
    res.send('Details of a specific user');
});

export default router;
