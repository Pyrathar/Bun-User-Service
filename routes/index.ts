import server from "bunrest";
import users from './users';
import organizations from    './organizations';

const routes = server();

routes.use('/users', users);
routes.use('/organizations', organizations);


export default routes;
