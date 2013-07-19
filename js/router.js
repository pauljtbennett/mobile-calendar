Calendar.Router.map(function () {
  this.resource('home', { path: '/' });
  this.resource('events', { path: '/events' });
  this.resource('event', { path: '/events/:event_id' });
});

Calendar.EventsRoute = Ember.Route.extend({
  observesParameters: ['from', 'to'],
  model: function (params) {
    return Calendar.Event.find(this.get('queryParameters'));
  },
  renderTemplate: function(controller) {
    var params = Ember.Router.QueryParameters.create({ from: '2013-08-01', from: '2013-08-31' });
    
    this.render('events', { controller: controller, params: params });
  }
});

Calendar.EventRoute = Ember.Route.extend({
  model: function(params) {
    return Calendar.Event.find(params.event_id);
  },
  serialize: function(event) {
    return { event_id: event.get('id') };
  }
});