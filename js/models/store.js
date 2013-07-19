Calendar.Store = DS.Store.extend({
  adapter: DS.FixtureAdapter.extend({
    queryFixtures: function(fixtures, query, type) {
      return fixtures.filter(function(item) {
        if (query.hasOwnProperty('from') && query.hasOwnProperty('to')) {
            var date = new Date(item['starts_at']), from = new Date(query['from']), to = new Date(query['to']);
            
            if (date < from || date > to) return false;
        }

        return true;
      });
    }
  })
});