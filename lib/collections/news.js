News = new Mongo.Collection('news');


News.allow({
  insert: function(userId) {
    var user = Meteor.users.findOne(userId);
    return user && user.admin;
  },
    remove: function(userId) {
    var user = Meteor.users.findOne(userId);
    return user && user.admin;
  },  update: function(userId) {
    var user = Meteor.users.findOne(userId);
    return user && user.admin;
  }
});

News.schoolNews = function() {
  return News.find({}, {sort: {CreatedDate: -1}, limit: 50});
}

News.latest = function() {
  return News.findOne({}, {sort: {CreatedDate: -1}, limit: 1});
}

if (Meteor.isServer && News.find().count() === 0) {
  Meteor.startup(function() {
    News.insert({
      Text: 'We welcome all parenta to Paaza! Lets endevour to communicate better',
      CreatedDate: new Date,
      CreatedBy: 'system'
    });
  });
}