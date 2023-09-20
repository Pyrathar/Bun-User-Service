import routes from './routes';

routes.router();
routes.listen(3000, () => {
    console.log('We are live at port 3000');
  });