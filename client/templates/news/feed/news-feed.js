Template.newsFeed.helpers({
  news: function() {
    var act = News.schoolNews();
    console.log(act);
    return act;
  },
  ready: function() {
    return true; //Router.current().subscriptionItems.ready();
  }
})