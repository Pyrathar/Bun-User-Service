import server from "bunrest";
import routes from './routes';

routes.router();
routes.listen(3000, () => {
    console.log('App is listening on port 3000');
  });