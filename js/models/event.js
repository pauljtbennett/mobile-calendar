Calendar.Event = DS.Model.extend({
  title: DS.attr('string'),
  location: DS.attr('string'),
  description: DS.attr('string'),
  starts_at: DS.attr('datetime'),
  ends_at: DS.attr('datetime')
});

Calendar.Event.FIXTURES = [
  {
    id: 1,
    title: '12Devs',
    location: 'Mozilla HQ London',
    description: '',
    starts_at: '2013-08-05 19:00:00',
    ends_at: '2013-08-05 21:00:00'
  },
  {
    id: 2,
    title: 'Something',
    location: 'Mozilla HQ London',
    description: '',
    starts_at: '2013-08-08 00:00:00',
    ends_at: '2013-08-08 00:00:00'
  }
];