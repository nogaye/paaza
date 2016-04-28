Students = new Mongo.Collection('students');

Students.allow({
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

Students.latest = function() {
  return Parents.findOne({}, {sort: {date: -1}, limit: 1});
}

