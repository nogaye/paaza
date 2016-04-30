Schools = new Mongo.Collection('schools');

Schools.allow({
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

Schools.current = function() {
  //return Schools.findOne({}, {sort: {date: -1}, limit: 1});
  return Schools.find({}, {sort: {UpdatedDate: -1}, limit: 1});
}

