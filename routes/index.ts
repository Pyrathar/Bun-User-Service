import server from "bunrest";
import users from './users';
import groups from './groups';

const routes = server();

routes.use('/users', users);
routes.use('/groups', groups);


export default routes;
