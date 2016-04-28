Template.feed.helpers({
  activities: function() {
    var act = Activities.find({}, {sort: {date: -1}});
    console.log(act);
    return act;
  },
  ready: function() {
    return Router.current().feedSubscription.ready();
  }
})