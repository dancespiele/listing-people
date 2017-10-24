export class App {
  configureRouter(config, router) {
    config.title = 'Listing people';
    config.map([
      { route: '', moduleId: 'views/people', title: 'People'},
      { route: 'people/:filter', moduleId: 'views/people', name: 'filter'}
    ]);

    this.router = router;
  }
}
